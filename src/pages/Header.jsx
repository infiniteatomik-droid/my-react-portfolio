import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-xl font-bold text-slate-800">MyPortfolio</div>
        
        {/* Навигация с простыми, железно рабочими классами */}
        <nav className="flex gap-6">
          <NavLink to="/" className="text-blue-600 hover:text-blue-800 font-medium">Главная</NavLink>
          <NavLink to="/about" className="text-blue-600 hover:text-blue-800 font-medium">Обо мне</NavLink>
          <NavLink to="/projects" className="text-blue-600 hover:text-blue-800 font-medium">Проекты</NavLink>
          <NavLink to="/contacts" className="text-blue-600 hover:text-blue-800 font-medium">Контакты</NavLink>
        </nav>
      </div>
    </header>
  );
}

