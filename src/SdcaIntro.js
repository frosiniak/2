import React from "react";
import "./SdcaIntro.css";

import sdcaImage from "./assets/sdca/sdca.png"; 
import fordImage from "./assets/sdca/ford.png"; 

export default function SdcaIntro({ onStart, onBack }) {
  return (
    <div className="sdca-page">
      <div className="sdca-card">

        {/* Верхня панель: кнопка Назад + 3 окремі мікро-кнопки */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15, flexWrap: "wrap", gap: "10px" }}>
          <button className="sdca-back-top" onClick={onBack}>
            ← Назад
          </button>

          <div className="sdca-top-cases-container">
            <button className="sdca-case-mini-btn active" onClick={onStart}>
              Кейс 1
            </button>
            <button className="sdca-case-mini-btn disabled" onClick={() => alert("Кейс 2 в розробці")}>
              Кейс 2
            </button>
            <button className="sdca-case-mini-btn disabled" onClick={() => alert("Кейс 3 в розробці")}>
              Кейс 3
            </button>
          </div>
        </div>

        <h1 className="sdca-title">Цикл Standardize — Do — Check — Act (SDCA)</h1>

        {/* Вступ */}
        <p className="sdca-text">
          Цикл <b>SDCA</b> — це модель управління стабільністю та підтриманням стандартів, що виникла як логічне продовження PDCA. Він використовується для забезпечення стабільної ефективності процесів, уникнення деградації якості та підтримки досягнутих результатів на високому рівні.
          Для керівників органів МВС SDCA є інструментом підтримання базової дисципліни та стійкості роботи в умовах високих навантажень.
        </p>

        {/* Головна ілюстрація циклу — тепер з обмеженим адаптивним розміром */}
        <img src={sdcaImage} alt="Схема циклу SDCA" className="sdca-image-full" />

        <h2 className="sdca-subtitle" style={{ fontSize: 20, fontWeight: 700, margin: "22px 0 8px" }}>
          Приклад застосування SDCA в роботі поліції
        </h2>

        <p className="sdca-text">
          Уявімо ситуацію: керівник закріплює успішно реформований процес реагування екіпажів у місті. SDCA діє так:
        </p>

        <p className="sdca-text"><strong>Standardize:</strong> чітко прописую новий алгоритм дій чергового та маршрути патрульних екіпажів.</p>
        <p className="sdca-text"><strong>Do:</strong> підрозділи працюють за новими стандартами щодня, не відходячи від алгоритму.</p>
        <p className="sdca-text"><strong>Check:</strong> щотижня аналізую статистику реагування та відповідність маршруту встановленим нормам.</p>
        <p className="sdca-text"><strong>Act:</strong> за результатами перевірки вношу дрібні корекції, закріплюючи стабільність досягнутого рівня ефективності.</p>

        <p className="sdca-text">
          Таким чином SDCA допомагає підтримувати високий рівень організаційної роботи, запобігаючи відкату до менш ефективних практик.
        </p>

        {/* Блок із цитатою Генрі Форда */}
        <div className="sdca-quote-block">
          <div className="sdca-quote-image-wrap">
            <img src={fordImage} alt="Генрі Форд" className="sdca-image-side" />
          </div>

          <p className="sdca-text sdca-quote-text">
            Цитата Генрі Форда чудово ілюструє суть SDCA:
            <br /><br />
            <i>
              «Якщо ви вважаєте стандартизацію найкращим з того, що ви знаєте сьогодні, але що потрібно вдосконалити завтра, ви чогось досягнете».
            </i>
            <br /><br />
            Це підкреслює, що закріплення успішних практик і постійне вдосконалення стандартів — ключ до стабільного та стійкого розвитку.
          </p>
        </div>

        {/* Нижня панель дій з великими кнопками */}
        <div className="sdca-bottom-actions-container">
          <button className="sdca-large-case-btn primary" onClick={onStart}>
            Кейс 1: Стабільність процесів
          </button>
          <button className="sdca-large-case-btn secondary" onClick={() => alert("Кейс 2 в розробці")}>
            Кейс 2: В розробці
          </button>
          <button className="sdca-large-case-btn secondary" onClick={() => alert("Кейс 3 в розробці")}>
            Кейс 3: В розробці
          </button>
        </div>

      </div>
    </div>
  );
}