import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Layout from './pages/Layout';

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

/* 
ГЛОБАЛЬНЫЙ ТРЕК СЛЕДОВАНИЯ (Маршрут построен! 🚀):

[+] Неделя 1: База React (Развертывание, JSX, useState, Списки, Условный рендеринг) -> ВЫПОЛНЕНА! 🎉
[+] Неделя 2-3: Продвинутый React (Инпуты, формы, хук useEffect, работа с API / fetch) 
                и Экосистема (Маршрутизация react-router-dom, стили Tailwind CSS). -> ВЫПОЛНЕНА! 🔥👑
    ├── День 6: Управляемые инпуты и мини-задачи — ВЫПОЛНЕН! 🔥
    ├── День 7: Управление сложной формой через один объект стейта — ВЫПОЛНЕН! 👑
    ├── День 8: Введение в useEffect и базовые запросы к API (fetch) — ВЫПОЛНЕН! 🎬 🚀
    ├── День 9: Обработка ошибок (isError) + работа со сложной структурой данных API — ВЫПОЛНЕН! 🛠
    ├── День 10: Сборный мини-проект по продвинутому React (GitHub Finder) — ВЫПОЛНЕН! 🚀 ^_^
    ├── День 11: Установка Tailwind CSS + основы стилизации (цвета, отступы, шрифты) — ВЫПОЛНЕН! 🎨🔥
    ├── День 12: Флексбоксы (Flexbox) в Tailwind — верстаем сетку и выравниваем элементы. — ВЫПОЛНЕН! 💎👑
    ├── День 13: Введение в Роутинг (react-router-dom) — создаем первые страницы сайта. — ВЫПОЛНЕН! 🗺🎉
    ├── День 14: Динамические параметры в ссылках (useParams) и навигация (useNavigate). — ВЫПОЛНЕН! 🚗💨
    └── День 15: Практический мини-проект недели (Многостраничный сайт-визитка / Портфолио). — ВЫПОЛНЕН! 👑🏆

                  👑 ТЫ ЗДЕСЬ (Половина пути позади, ты крут!) 👑
                  │
[ ] Неделя 4: Глобальный стейт (Redux Toolkit — теория и база).
[ ] Неделя 5-6: Большой портфолио-проект (Интернет-магазин или Авиабилеты: UI + API + Redux).
[ ] Неделя 7: Деплой (Vercel/GitHub), составление резюме джуна и оформление LinkedIn.
[ ] Неделя 8: Симуляция собеседований (Вопросы, тестовые) и старт откликов на вакансии.
*/
