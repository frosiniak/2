import React from "react";
import "./SdcaIntro.css";

import sdcaImage from "./assets/sdca/sdca.png"; 
import fordImage from "./assets/sdca/ford.png"; 

export default function SdcaIntro({ onStart, onBack, currentCase = 1 }) {
  return (
    <div className="sdca-page">
      <div className="sdca-card">

        {/* Верхня панель: кнопка Назад + 3 окремі мікро-кнопки */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15, flexWrap: "wrap", gap: "10px" }}>
          <button className="sdca-back-top" onClick={onBack}>
            ← Назад
          </button>

          <div className="sdca-top-cases-container">
  <button 
    className="sdca-case-mini-btn" 
    onClick={() => onStart(1)}
  >
    Кейс 1
  </button>
  <button 
    className="sdca-case-mini-btn" 
    onClick={() => onStart(2)}
  >
    Кейс 2
  </button>
  <button 
    className="sdca-case-mini-btn" 
    onClick={() => onStart(3)}
  >
    Кейс 3
  </button>
</div>
        </div>

        <h1 className="sdca-title">Цикл Standardize — Do — Check — Act (SDCA)</h1>

        {/* Вступ */}
        <p className="sdca-text">
          Цикл <b>SDCA</b> (Standardize-Do-Check-Act / Стандартизувати-Виконати-Перевірити-Діяти) застосовується тоді, коли процес уже оптимізовано (наприклад, за допомогою PDCA), і головне завдання керівника — стабілізувати ситуацію, закріпити успіх та підтримувати стандарти на високому рівні.
        </p>
        <p className="sdca-text">
          Для керівника правоохоронного органу це інструмент системного контролю, який запобігає поверненню підрозділу до старих помилок і хаосу. Таким чином SDCA допомагає підтримувати високий уровень організаційної роботи, запобігаючи відкату до менш ефективних практик.
        </p>

        {/* ПРИКЛАД В РОБОЦІ ПОЛІЦІЇ — ПОВНІСТЮ ВІДНОВЛЕНО */}
        <h2 className="sdca-subtitle">Приклад застосування SDCA в роботі поліції:</h2>
        <ul className="sdca-text" style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li><b>Standardize (Стандартизувати):</b> затвердження чіткої інструкції або регламенту (наприклад, графік патрулювання, алгоритм реагування на виклик).</li>
          <li><b>Do (Виконати):</b> робота суворо за інструкцією, ознайомлення всього особового складу з новими правилами.</li>
          <li><b>Check (Перевірити):</b> моніторинг дотримання стандарту (через GPS-трекери, бодікамери, аналіз логів системи чи перевірки чергової частини).</li>
          <li><b>Act (Діяти):</b> реагування на відхилення. Якщо хтось порушує — провести навчання або заблокувати технічну можливість порушення. Якщо стандарт застарів — ініціювати його оновлення.</li>
        </ul>

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

        {/* Нижня панель дій з великими кнопками — ПОВНІСТЮ АКТИВОВАНО */}
        <div className="sdca-bottom-actions-container">
          <button className="sdca-large-case-btn primary" onClick={() => onStart(1)}>
            Кейс 1: Забезпечення невідлучності патрулів
          </button>
          <button className="sdca-large-case-btn primary" onClick={() => onStart(2)}>
            Кейс 2: Дотримання гендерного балансу
          </button>
          <button className="sdca-large-case-btn primary" onClick={() => onStart(3)}>
            Кейс 3: Дотримання регламенту ІТ-безпеки
          </button>
        </div>

      </div>
    </div>
  );
}