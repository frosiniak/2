import React, { useMemo, useState } from "react";

import pdca from "./scenarios/pdca.json";
import ooda1 from "./scenarios/ooda1.json";
import ooda2 from "./scenarios/ooda2.json";
import ooda3 from "./scenarios/ooda3.json";
import sdca from "./scenarios/sdca.json";

import OodaIntro from "./OodaIntro";
import PdcaIntro from "./PdcaIntro";
import SdcaIntro from "./SdcaIntro";

import "./Trainer.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwnC5MgaVFRLzSm97axk3417-__RSyM2J-L57wEn73lfyMKFy44QcY9AUM-nHGc5EA/exec";

export default function Trainer() {
  const [userName, setUserName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [model, setModel] = useState(null);
  const [currentCase, setCurrentCase] = useState(1); // Номер обраного кейсу для OODA

  // intro page toggles
  const [showOodaIntro, setShowOodaIntro] = useState(false);
  const [showPdcaIntro, setShowPdcaIntro] = useState(false);
  const [showSdcaIntro, setShowSdcaIntro] = useState(false);

  // Динамічний вибір сценарію залежно від обраного кейсу OODA
  const scenarios = useMemo(() => {
    const oodaMap = {
      1: ooda1,
      2: ooda2,
      3: ooda3,
    };

    const map = {
      PDCA: pdca,
      OODA: oodaMap[currentCase] || ooda1,
      SDCA: sdca,
    };
    return model ? map[model] || [] : [];
  }, [model, currentCase]);

  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const [feedback, setFeedback] = useState("");
  const [attemptsForStep, setAttemptsForStep] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const hasScenarios = scenarios?.length > 0;
  const scenario = hasScenarios ? scenarios[currentScenarioIndex] : null;
  const step = scenario?.steps?.[stepIndex] || null;

  const totalQuestions = useMemo(() => {
    if (!hasScenarios) return 0;
    return scenarios.reduce(
      (sum, s) => sum + (Array.isArray(s.steps) ? s.steps.length : 0),
      0
    );
  }, [scenarios, hasScenarios]);

  const handleChoice = (option) => {
    if (stepCompleted) return;
    setFeedback(option.feedback || "");

    if (option.result === "success") {
      if (attemptsForStep === 0) setCorrectCount((c) => c + 1);
      setStepCompleted(true);
    } else {
      setAttemptsForStep((a) => a + 1);
    }
  };

  const goNextStep = () => {
    setFeedback("");
    setAttemptsForStep(0);
    setStepCompleted(false);

    if (stepIndex < scenario.steps.length - 1) {
      setStepIndex((i) => i + 1);
    } else if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex((i) => i + 1);
      setStepIndex(0);
    }
  };

  const nextScenario = () => {
    setFeedback("");
    setAttemptsForStep(0);
    setStepCompleted(false);
    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex((i) => i + 1);
      setStepIndex(0);
    }
  };

  const resetProgress = () => {
    setCurrentScenarioIndex(0);
    setStepIndex(0);
    setFeedback("");
    setAttemptsForStep(0);
    setCorrectCount(0);
    setStepCompleted(false);
  };

  const chooseModel = (m) => {
    if (m === "PDCA") {
      setModel(m);
      resetProgress();
      setShowPdcaIntro(true);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("model", m);
        window.history.replaceState({}, "", url.toString());
      } catch {}
      return;
    }

    if (m === "SDCA") {
      setModel(m);
      resetProgress();
      setShowSdcaIntro(true);
      try {
        const url = new URL(window.location.href);
        url.searchParams.set("model", m);
        window.history.replaceState({}, "", url.toString());
      } catch {}
      return;
    }

    setModel(m);
    resetProgress();
    if (m === "OODA") setShowOodaIntro(true);

    try {
      const url = new URL(window.location.href);
      url.searchParams.set("model", m);
      window.history.replaceState({}, "", url.toString());
    } catch {}
  };

  const handleStartOodaCase = (caseNumber) => {
    setCurrentCase(caseNumber);
    resetProgress();
    setShowOodaIntro(false);
  };

  const sendResults = async () => {
    if (isSending) return;
    setIsSending(true);

    const percent = totalQuestions
      ? Math.round((correctCount / totalQuestions) * 100)
      : 0;

    const payload = {
      name: userName || "Анонім",
      date: new Date().toLocaleString(),
      result: `${correctCount}/${totalQuestions}`,
      percent,
      model: `${model} (Кейс ${currentCase})`,
    };

    try {
      const formData = new FormData();
      Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      console.log(await res.text());
      alert(
        `Результати надіслані: ${correctCount}/${totalQuestions} (${percent}%).`
      );

      resetProgress();
      setModel(null);
      setNameSubmitted(false);

      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("model");
        window.history.replaceState({}, "", url.toString());
      } catch {}
    } catch {
      alert("Помилка надсилання результатів.");
    } finally {
      setIsSending(false);
    }
  };

  if (!nameSubmitted) {
    return (
      <div className="trainer-intro-wrapper">
        <div className="trainer-intro-card">
          <h1 className="trainer-intro-title">
            Тренажер управлінських рішень SIMDEC
          </h1>

          <p className="trainer-intro-text">
            <b>
              Раді вітати Вас у SIMDEC — тренажері управлінських рішень,
              створеному фахівцями Донецького державного університету
              внутрішніх справ.
            </b>
          </p>

          <p className="trainer-intro-text">
            Ця платформа допомагає керівникам Національної поліції України та
            підрозділів МВС відпрацьовувати управлінські дії в умовах,
            змодельованих максимально наближених до реальних. У SIMDEC Ви
            обираєте варіант дій у ситуації та одразу отримуєте оцінку
            наслідків — без ризику для особового складу чи оперативної
            обстановки.
          </p>

          <p className="trainer-intro-text">
            Тренажер поєднує сучасні моделі ухвалення рішень, інтерактивні
            сценарії та автоматизовану аналітику, підтримуючи розвиток
            управлінських компетентностей.
          </p>

          <p className="trainer-intro-text trainer-intro-emphasis">
            Щоб розпочати тренування, введіть своє ім’я або позивний та оберіть
            модель ухвалення рішень.
          </p>

          <p className="trainer-intro-confidential">
            Ваші дані використовуються виключно організаторами навчання і не
            передаються третім особам.
          </p>

          <div className="trainer-intro-form">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Ваше ім’я або позивний"
              className="trainer-intro-input"
            />

            <button
              type="button"
              className="trainer-start-btn"
              onClick={() => {
                if (!userName.trim()) {
                  alert("Введіть ім’я або позивний!");
                  return;
                }
                setNameSubmitted(true);
              }}
            >
              Розпочати тренування
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (model === "PDCA" && showPdcaIntro) {
    return (
      <PdcaIntro
        onStart={() => setShowPdcaIntro(false)}
        onBack={() => {
          setShowPdcaIntro(false);
          setModel(null);
        }}
      />
    );
  }

  if (model === "SDCA" && showSdcaIntro) {
    return (
      <SdcaIntro
        onStart={() => setShowSdcaIntro(false)}
        onBack={() => {
          setShowSdcaIntro(false);
          setModel(null);
        }}
      />
    );
  }

  if (model === "OODA" && showOodaIntro) {
    return (
      <OodaIntro
        onStart={handleStartOodaCase}
        onBack={() => {
          setShowOodaIntro(false);
          setModel(null);
        }}
      />
    );
  }

  if (!model) {
    return (
      <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
        <div style={cardStyle}>
          <button
            type="button"
            style={{
              ...secondaryBtn,
              width: "auto",
              marginBottom: 16,
              background: "#1e3a8a",
            }}
            onClick={() => {
              setNameSubmitted(false);
              setModel(null);
            }}
          >
            Назад
          </button>

          <h2 style={{ textAlign: "center", marginBottom: 16 }}>
            Онлайн-тренажер «СИМДЕК»
          </h2>

          <p style={{ marginBottom: 6 }}>
            Раді вітати вас, <b>{userName}</b>, на онлайн-тренажері «СИМДЕК»
            Донецького державного університету внутрішніх справ.
          </p>
          <p style={{ marginBottom: 6 }}>
            Для проходження навчання оберіть цикл прийняття управлінських
            рішень, за яким будете проводити тренування.
          </p>
          <p style={{ marginBottom: 16, opacity: 0.9 }}>
            Після вибору модели система послідовно запропонує вам ситуації,
            запитання та зворотний зв’язок.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
              marginTop: 12,
            }}
          >
            <div style={colBox}>
              <h3 style={colTitle}>PDCA</h3>
              <p style={colText}>
                Цикл безперервного вдосконалення: Плануй, Виконуй, Перевіряй,
                Дій. Використовується для покращення процесів.
              </p>
              <button onClick={() => chooseModel("PDCA")} style={primaryBtn}>
                PDCA
              </button>
            </div>

            <div style={colBox}>
              <h3 style={colTitle}>OODA</h3>
              <p style={colText}>
                Модель швидкого реагування: Спостерігай, Орієнтуйся, Приймай
                рішення, Дій. Ефективна в умовах протиборства.
              </p>
              <button onClick={() => chooseModel("OODA")} style={primaryBtn}>
                OODA
              </button>
            </div>

            <div style={colBox}>
              <h3 style={colTitle}>SDCA</h3>
              <p style={colText}>
                Цикл стабілізації процесів: Стандартизуй, Виконуй, Перевіряй,
                Коригуй. Підтримує сталість і якість дій.
              </p>
              <button onClick={() => chooseModel("SDCA")} style={primaryBtn}>
                SDCA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: 20 }}>
      <div style={cardStyle}>
        
        {/* Верхня навігаційна кнопка повернення назад до меню вступних кейсів */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 15 }}>
          <button
            type="button"
            style={{
              ...primaryBtn,
              width: "auto",
              background: "#4b5563",
              padding: "6px 14px",
              fontSize: "14px",
            }}
            onClick={() => {
              resetProgress();
              if (model === "OODA") setShowOodaIntro(true);
              if (model === "PDCA") setShowPdcaIntro(true);
              if (model === "SDCA") setShowSdcaIntro(true);
            }}
          >
            ← До опису кейсів
          </button>
        </div>

        <h2>{scenario?.title}</h2>
        <p style={{ whiteSpace: "pre-line" }}>{scenario?.scenario}</p>

        {step ? (
          <>
            <h3 style={{ whiteSpace: "pre-line", marginTop: 20 }}>
              {step.question}
            </h3>

            <div style={{ display: "grid", gap: 8, marginTop: 15 }}>
              {step.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleChoice(opt)}
                  disabled={stepCompleted}
                  style={primaryBtn}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {feedback && (
              <div style={stepCompleted ? correctBox : wrongBox}>
                {feedback}
              </div>
            )}

            {stepCompleted && (
              <div style={{ marginTop: 12 }}>
                {stepIndex < scenario.steps.length - 1 ? (
                  <button onClick={goNextStep} style={successBtn}>
                    Далі
                  </button>
                ) : currentScenarioIndex < scenarios.length - 1 ? (
                  <button onClick={nextScenario} style={successBtn}>
                    Наступний сценарій
                  </button>
                ) : (
                  <button
                    onClick={sendResults}
                    style={secondaryBtn}
                    disabled={isSending}
                  >
                    {isSending ? "Надсилаю..." : "Завершити і відправити"}
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div style={infoBox}>Немає кроків.</div>
        )}
      </div>
    </div>
  );
}

// --------------------------------------
// СТИЛІ
// --------------------------------------
const primaryBtn = {
  display: "block",
  width: "100%",
  padding: "10px 14px",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  background: "#1e40af",
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
};

const successBtn = { ...primaryBtn, width: "auto", background: "#16a34a" };
const secondaryBtn = { ...primaryBtn, width: "auto" };

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 18,
};

const colBox = {
  background: "#f9fafb",
  padding: 12,
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const colTitle = {
  textAlign: "center",
  marginBottom: 8,
  fontSize: 16,
  fontWeight: 700,
};

const colText = {
  fontSize: 14,
  lineHeight: 1.45,
  marginBottom: 12,
  textAlign: "justify",
};

const correctBox = {
  marginTop: 12,
  padding: 12,
  borderRadius: 10,
  background: "#d1fae5",
  color: "#065f46",
};

const wrongBox = {
  marginTop: 12,
  padding: 12,
  borderRadius: 10,
  background: "#fee2e2",
  color: "#991b1b",
};

const infoBox = {
  padding: 16,
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  background: "#f9fafb",
};