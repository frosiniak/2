// ==========================================
//  PdcaIntro.js — ОПТИМІЗОВАНА ВЕРСІЯ
//  Діаграму перенесено на всю ширину після першого абзацу
//  Текст та зображення збережено в оригіналі
// ==========================================

import React from "react";
import "./PdcaIntro.css";

import pdcaImage from "./assets/pdca/pdca.png";     
import demingImage from "./assets/pdca/deming.png"; 

export default function PdcaIntro({ onStart, onBack }) {
  return (
    <div className="pdca-page">
      <div className="pdca-card">

        {/* Навігаційна панель */}
        <div className="pdca-top-bar">
          <button className="pdca-back-top" onClick={onBack}>
            ← Назад
          </button>

          <div className="pdca-top-cases-container">
            <button className="pdca-case-mini-btn" onClick={() => onStart(1)}>
              Кейс 1
            </button>
            <button className="pdca-case-mini-btn" onClick={() => onStart(2)}>
              Кейс 2
            </button>
            <button className="pdca-case-mini-btn" onClick={() => onStart(3)}>
              Кейс 3
            </button>
          </div>
        </div>

        <h1 className="pdca-title">Модель безперервного вдосконалення PDCA (Цикл Демінга)</h1>

        <p className="pdca-text">
          <b>Цикл PDCA</b> (Plan-Do-Check-Act — Плануй-Роби-Перевіряй-Дій) — це класичний управлінський алгоритм безперервного вдосконалення процесів та управління якістю. Він вчить керівників не приймати поспішних рішень «на емоціях», а діяти системно: проєктувати зміни, тестувати рішення на локальних ділянках, аналізувати цифрові дані та впроваджувати системні стандарти.
        </p>

        {/* Модифікація 1: Діаграма на всю ширину з нового рядка */}
        <div className="pdca-main-image-container">
          <img 
            src={pdcaImage} 
            alt="Цикл PDCA" 
            className="pdca-main-image-fullwidth" 
          />
        </div>

        <h2 className="pdca-subtitle">Чотири кроки циклу PDCA:</h2>
        <ul className="pdca-text" style={{ paddingLeft: "20px", marginBottom: "20px" }}>
          <li><b>PLAN (Плануй):</b> Визначення цілей, аналіз поточної проблеми (наприклад, через черги, затримки або скарги) та розробка плану дій із вимірюваними показниками.</li>
          <li><b>DO (Роби):</b> Впровадження запланованих змін у тестовому чи локальному режимі на обмеженій ділянці (пілотний проєкт), щоб не порушити стабільність усієї системи.</li>
          <li><b>CHECK (Перевіряй):</b> Збір інформації після тестового періоду, порівняння реальних результатів із плановими показниками, пошук відхилень та помилок.</li>
          <li><b>ACT (Дій / Регулюй):</b> Якщо тест успішний — масштабування рішення та затвердження його як нового стандарту. Якщо виявлено помилки — коригування плану та запуск нового кола циклу.</li>
        </ul>

        {/* Блок із цитатою Демінга */}
        <div className="pdca-quote-block">
          <div className="pdca-quote-image-wrap">
            <img src={demingImage} alt="Вільям Едвардс Демінг" className="pdca-image-side" />
          </div>

          <p className="pdca-text pdca-quote-text">
            Наступна цитата дуже влучно передає філософію переваги аналітичного підходу та \
            роботи з показниками, яка є засадничою основою моделі PDCA:
            <br /><br />
            <i>
              «Без даних ти лише людина з думкою. Дані — це основа покращення».
            </i>
            <br /><br />
            <span style={{ fontSize: 14, color: "#64748b" }}>— Вільям Едвардс Демінг</span>
          </p>
        </div>

        {/* Нижня панель дій (Модифікація 2: Всі великі кнопки уніфіковано за кольором Кейсу 1) */}
        <div className="pdca-bottom-actions-container">
          <button className="pdca-large-case-btn pdca-btn-uniform" onClick={() => onStart(1)}>
            Кейс 1: Патрулювання та зниження рівня вуличної злочинності
          </button>
          
          <button className="pdca-large-case-btn pdca-btn-uniform" onClick={() => onStart(2)}>
            Кейс 2: Оптимізація роботи служби прийому та обробки викликів «102»
          </button>
          
          <button className="pdca-large-case-btn pdca-btn-uniform" onClick={() => onStart(3)}>
            Кейс 3: Зменшення професійного вигорання та плинності кадрів
          </button>
        </div>

      </div>
    </div>
  );
}