// ==========================================
//  OodaIntro.js — ПОВНА ВЕРСІЯ (ВІДНОВЛЕНО ТЕКСТ)
//  Повернено розширені описи етапів та приклад поліції
//  Збережено мікро-кнопки, 3 кейси та фікс стилів
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
          <b>Цикл OODA</b> — це модель прийняття рішень, запропонована американським військовим стратегом полковником Джоном Бойдом. Вона описує, як у швидкісних умовах керівник повинен збирати інформацію, орієнтуватися в ситуації, обирати рішення та діяти швидше, ніж це робить супротивник або фактор небезпеки.
        </p>

{/* Центральний малюнок */}
        <div className="ooda-img-center-wrap" style={{ margin: "20px 0" }}>
          <img 
            src={loopOfficial} 
            alt="Схема OODA Loop" 
            style={{ width: "100%", maxWidth: "500px", height: "auto", margin: "0 auto", display: "block", borderRadius: "10px" }} 
          />
        </div>

        {/* Детальний опис 4-х етапів з базової версії */}
        <div style={{ margin: "20px 0", background: "#f8fafc", padding: "16px", borderRadius: "12px", borderLeft: "4px solid #1e40af" }}>
          <p className="ooda-text" style={{ margin: "0 0 10px" }}>
            <b>Observe (Спостереження):</b> збір інформації про обстановку, сигнали, ризики та зміни.
          </p>
          <p className="ooda-text" style={{ margin: "0 0 10px" }}>
            <b>Orient (Орієнтація):</b> аналіз того, що відбувається — найважливіший етап, який визначає якість рішень.
          </p>
          <p className="ooda-text" style={{ margin: "0 0 10px" }}>
            <b>Decide (Рішення):</b> вибір оптимального варіанту дій з урахуванням обстановки.
          </p>
          <p className="ooda-text" style={{ margin: 0 }}>
            <b>Act (Дія):</b> оперативне виконання рішення та миттєве повернення до спостереження.
          </p>
        </div>

         <p className="ooda-text">
          Головна ідея OODA полягає в тому, що керівник, який проводить цикл швидше, отримує тактичну та інформаційну перевагу. Швидкість не означає поспіх — вона є результатом якісної орієнтації та здатності адаптуватися до нових умов.
        </p>
        
        <p className="ooda-text">
          Якщо керівник може швидко зібрати дані, правильно інтерпретувати їх та прийняти рішення, він «прориває цикл» супротивника або мінімізує наслідки небезпечної ситуації.
        </p>

        {/* Приклад застосування в роботі поліції з базової версії */}
        <div style={{ margin: "25px 0", padding: "16px", background: "#f1f5f9", borderRadius: "12px" }}>
          <h4 style={{ margin: "0 0 10px 0", fontSize: "16px", fontWeight: "700", color: "#1e3a8a", textAlign: "center" }}>
            Приклад застосування OODA в роботі поліції
          </h4>
          <p className="ooda-text" style={{ margin: "0 0 10px 0" }}>
            Уявімо ситуацію: екіпаж патрульної поліції прибуває на виклик про правопорушення. Обстановка змінюється з кожною секундою, присутні агресивні особи, наявні ознаки загрози. У таких умовах цикл OODA допомагає:
          </p>
          <ul style={{ margin: 0, paddingLeft: "20px", color: "#111827", lineHeight: "1.7", fontSize: "15px" }}>
            <li style={{ marginBottom: "6px" }}>швидко оцінити обстановку;</li>
            <li style={{ marginBottom: "6px" }}>виявити реальні ризики;</li>
            <li style={{ marginBottom: "6px" }}>обрати найбезпечніший варіант реагування;</li>
            <li>негайно діяти й контролювати розвиток подій.</li>
          </ul>
        </div>

        {/* Блок з цитатою і обкладинкою Сунь-цзи */}
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
            style={{ cursor: "pointer", padding: "12px 20px", fontWeight: "600", width: "100%", display: "block", background: "#1e40af", color: "#ffffff", border: "none", borderRadius: "8px" }}
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