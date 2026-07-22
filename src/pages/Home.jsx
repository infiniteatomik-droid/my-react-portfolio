import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return(
    <div className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        Привет, я <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Frontend Разработчик</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
        Создаю современные, адаптивные и быстрые веб-приложения на React и Tailwind CSS. Изучаю практики разработки и превращаю макеты в живой код.
      </p>

       <div className="flex flex-col sm:flex-row gap-4">
      <button 
          onClick={() => navigate('/projects')}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all duration-200"
        >Посмотреть проекты</button>
      <button 
          onClick={() => navigate('/contacts')}
          className="px-8 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-all duration-200"
        >Связаться со мной
        </button>
      </div>
    </div>
  )
}