// =========================
//  PdcaIntro.js — ОНОВЛЕНО
//  Новий сучасний текст
//  Нова структура
//  Логічна прив’язка до ілюстрацій
//  Кнопка переходу нагорі (Система 3-х мікро-кнопок)
//  Компактний блок із Демінгом
// =========================

import React from "react";
import "./PdcaIntro.css";

import pdcaImage from "./assets/pdca/pdca.png";     // ← ілюстрація PDCA
import demingImage from "./assets/pdca/deming.png"; // ← фото Демінга

export default function PdcaIntro({ onStart, onBack }) {
  return (
    <div className="pdca-page">
      <div className="pdca-card">

        {/* Верхня панель: кнопка Назад + 3 окремі мікро-кнопки (Тотожно до OODA) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15, flexWrap: "wrap", gap: "10px" }}>
          <button className="pdca-back-top" onClick={onBack}>
            ← Назад
          </button>

          <div className="pdca-top-cases-container">
            <button className="pdca-case-mini-btn active" onClick={onStart}>
              Кейс 1
            </button>
            <button className="pdca-case-mini-btn disabled" onClick={() => alert("Кейс 2 в розробці")}>
              Кейс 2
            </button>
            <button className="pdca-case-mini-btn disabled" onClick={() => alert("Кейс 3 в розробці")}>
              Кейс 3
            </button>
          </div>
        </div>

        <h1 className="pdca-title">Цикл Plan — Do — Check — Act (PDCA)</h1>

        {/* Вступ */}
        <p className="pdca-text">
          Цикл <b>PDCA</b> — це модель безперервного управлінського вдосконалення,
          запропонована американським науковцем Вільямом Едвардсом Демінгом. Він
          використовується для оптимизації процесів, підвищення якості рішень та
          системного усунення помилок у роботі організацій, що надзвичайно
          важливо для стабільної роботи будь-якого підрозділу.
        </p>

        {/* Головна ілюстрація циклу */}
        <img src={pdcaImage} alt="Схема циклу PDCA" className="pdca-image-full" />

        <h2 className="pdca-subtitle" style={{ fontSize: 20, fontWeight: 700, margin: "22px 0 8px" }}>
          Приклад застосування PDCA в роботі поліції
        </h2>

        <p className="pdca-text">
          Уявімо ситуацію: керівник підрозділу отримує інформацію про системні
          затримки екіпажів під час виїздів на термінові виклики. PDCA дозволяє:
        </p>

        <ul className="pdca-text" style={{ marginLeft: 20, lineHeight: "1.7" }}>
          <li><b>Plan:</b> визначити вузькі місця (маршрути, комунікація, розподіл екіпажів);</li>
          <li><b>Do:</b> запустити пілотні зміни в одному районі;</li>
          <li><b>Check:</b> оцінити час реагування за 1–2 тижні;</li>
          <li><b>Act:</b> масштабувати або коригувати новий алгоритм.</li>
        </ul>

        {/* Блок із цитатою Демінга — компактно та структуровано */}
        <div className="pdca-quote-block">
          <div className="pdca-quote-image-wrap">
            <img src={demingImage} alt="Вільям Едвардс Демінг" className="pdca-image-side" />
          </div>

          <p className="pdca-text pdca-quote-text">
            Наступна цитати дуже влучно передає філософію переваги аналітичного підходу та 
            роботи з показниками, яка є засадничою основою модели PDCA:
            <br /><br />
            <i>
              «Без даних ти лише людина з думкою. Дані — це основа покращення».
            </i>
            <br /><br />
            <span style={{ fontSize: 14, color: "#64748b" }}>— Вільям Едвардс Демінг</span>
          </p>
        </div>

        {/* Нижня панель дій з великою кнопкою вибору основного кейсу */}
        <div className="pdca-bottom-actions-container">
          <button className="pdca-large-case-btn primary" onClick={onStart}>
            Кейс 1: Комплектування кадрів
          </button>
          <button className="pdca-large-case-btn secondary" onClick={() => alert("Кейс 2 в розробці")}>
            Кейс 2: В розробці
          </button>
          <button className="pdca-large-case-btn secondary" onClick={() => alert("Кейс 3 в розробці")}>
            Кейс 3: В розробці
          </button>
        </div>

      </div>
    </div>
  );
}