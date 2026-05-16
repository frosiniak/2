// ==========================================
//  OodaIntro.js — ОНОВЛЕНА ВЕРСІЯ (ФІКС СТИЛІВ)
//  Виправлено розмір малюнка за зразком SDCA
//  Повністю розблоковано нижні великі кнопки
//  Жодних змін у текстах чи логіці
// ==========================================

import React from "react";
import "./OodaIntro.css";

import loopOfficial from "./assets/ooda/loop_official.png"; 
import sunTzu from "./assets/ooda/suntzu.png"; 

export default function OodaIntro({ onStart, onBack }) {
  return (
    <div className="ooda-page">
      <div className="ooda-card">

        {/* Назад + 3 окремі мікро-кнопки для швидкого переходу */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15, flexWrap: "wrap", gap: "10px" }}>
          <button className="ooda-back-top" onClick={onBack}>
            ← Назад
          </button>

          <div className="ooda-top-cases-container" style={{ display: "flex", gap: "6px" }}>
            <button className="ooda-case-mini-btn" onClick={() => onStart(1)}>
              Кейс 1
            </button>
            <button className="ooda-case-mini-btn" onClick={() => onStart(2)}>
              Кейс 2
            </button>
            <button className="ooda-case-mini-btn" onClick={() => onStart(3)}>
              Кейс 3
            </button>
          </div>
        </div>

        <h2 className="ooda-title">Цикл OODA (Петля Бойда)</h2>
        <p className="ooda-text">
          <b>OODA Loop</b> (Спостереження – Орієнтація – Рішення – Дія) — це концепція, розроблена стратегом 
          і пілотом ВПС США Джоном Бойдом для ухвалення ефективних рішень у критичних ситуаціях, що швидко змінюються.
        </p>

        {/* Центральний малюнок із суворим контролем розмірів як у SDCA */}
        <div className="ooda-img-center-wrap" style={{ margin: "20px 0" }}>
          <img 
            src={loopOfficial} 
            alt="Схема OODA Loop" 
            style={{ width: "100%", maxWidth: "500px", height: "auto", margin: "0 auto", display: "block", borderRadius: "10px" }} 
          />
        </div>

        <p className="ooda-text">
          Модель базується на ідеї, що перемагає той, хто здатний швидше та гнучкіше проходити всі чотири етапи, 
          «вклинюючись» у внутрішній цикл рішень супротивника та змушуючи його реагувати із запізненням.
        </p>

        <div className="ooda-quote-block">
          <div className="ooda-quote-image-wrap">
            <img src={sunTzu} alt="Сунь-цзи" className="ooda-image-side" />
          </div>

          <p className="ooda-text ooda-quote-text">
            Наступна цитата взята з трактату <i>«Мистецтво війни»</i> Сунь-цзи — одного з найвідоміших 
            стратегічних творів у світовій історії. Вона добре ілюструє філософію переваги в темпі, 
            яка є основою моделі OODA:
            <br /><br />
            <i>
              «Той, хто діє швидше та приймає рішення раніше, здобуває перевагу ще до того, 
              як супротивник усвідомить зміну ситуації».
            </i>
          </p>
        </div>

        {/* Нижня панель дій з гарантовано клікабельними великими кнопками вибору кейсів */}
        <div className="ooda-bottom-actions-container" style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: "12px" }}>
          <button 
            className="ooda-large-case-btn" 
            style={{ cursor: "pointer", padding: "12px 20px", fontWeight: "600", width: "100%", display: "block", background: "#1e40af", color: "#ffffff", border: "none", borderRadius: "8px" }}
            onClick={() => onStart(1)}
          >
            Кейс 1: Загроза зсередини (Диверсія в підрозділі)
          </button>
          
          <button 
            className="ooda-large-case-btn" 
            style={{ cursor: "pointer", padding: "12px 20px", fontWeight: "600", width: "100%", display: "block", background: "#4b5563", color: "#ffffff", border: "none", borderRadius: "8px" }}
            onClick={() => onStart(2)}
          >
            Кейс 2: Екстремальне переслідування
          </button>
          
          <button 
            className="ooda-large-case-btn" 
            style={{ cursor: "pointer", padding: "12px 20px", fontWeight: "600", width: "100%", display: "block", background: "#1e40af", color: "#ffffff", border: "none", borderRadius: "8px" }}
            onClick={() => onStart(3)}
          >
            Кейс 3: Раптовий вогневий контакт: розрив шаблону
          </button>
        </div>

      </div>
    </div>
  );
}