import React from "react";
import App from './App.jsx';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
/*🛒 СОСТОЯНИЕ КАРЬЕРНОГО ТРЕКА (Выходим на охоту за оффером! 🚀)[+] Неделя 1-4: Хард-скиллы (React, Redux Toolkit, Router, Tailwind) -> ВЫПОЛНЕНО! 📦💎[+] Неделя 5-6: Большой проект (Интернет-магазин на Netlify + API) -> ВЫПОЛНЕНО С БОЕМ! 🛒🔥[+] Неделя 7: Упаковка (STAR-резюме, LinkedIn, Юзернеймы, Ссылки) -> ВЫПОЛНЕНО НА 100%! 📄👑👔 НЕДЕЛЯ 8+: Активный поиск работы, прохождение интервью и дожим до ОФФЕРА[✅] День 1: Большой Старт (Профиль LinkedIn докручен, база на dev.kg создана, обход багов пройден) -> ВЫПОЛНЕНО! 🚀[✅] День 2: Поддержание формы (Полная упаковка резюме на hh.ru, настройка фильтров международной удаленки, отправлено 3 качественных отклика с огненным сопроводительным письмом на вакансии до $2500) -> ВЫПОЛНЕНО НА 100%! 🎯💼[ ] День 3: GitHub-активность (Мини-коммит в проект для зажигания зеленой плашки + 5 откликов на удаленку по СНГ) — ПЛАН НА ЗАВТРА 🛠️[ ] День 4: День Скрининга (Повторение теории: useState vs useEffect + 5 откликов)[ ] День 5: Охота на рекрутеров (Добавление 15 IT-HR в LinkedIn + Connect Notes)[ ] День 6-7: Выходные (Железный отдых, перезагрузка мозга, ноутбук закрыт)👑 ТВОЯ НАГРАДА (Цель, ради которой мы работали)[ ] ОФФЕР: Успешное техническое интервью -> Получение контракта Junior Frontend Developer! 🎉💼*/
