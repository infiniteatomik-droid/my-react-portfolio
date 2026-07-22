import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const skills = ['HTML5 & CSS3', 'JavaScript (ES6+)',
     'React.js', 'Tailwind CSS', 'Git & GitHub',
      'REST API / Fetch'];

  return(
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)}
        className="mb-8 text-sm font-medium text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors duration-200">
          ← Назад
        </button>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">Обо мне</h2>
    <p className="text-slate-600 mb-8 leading-relaxed">
      Я начинающий Frontend-разработчик. Мне нравится оживлять интерфейсы и делать их удобными для людей. 
        Сейчас я активно прокачиваю свои навыки в React к экосистеме современного JavaScript. 
        Постоянно учусь новому и готов к созданию интересных проектов.
      </p>
    
    <h3 className="text-xl font-semibold text-slate-800 mb-4">Мой стек технологий:</h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-3 hover:border-blue-200 transition-colors duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="font-medium text-slate-700">{skill}</span>
          </div>
          ))}
    </div>
  </div>
  )
}