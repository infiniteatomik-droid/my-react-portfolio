export default function Projects() {
  const projects = [
    {
      id: 1, 
      title: 'kanban-board',
      decs: 'Простая и удобная Канбан-доска для управления задачами прямо в браузере. Проект создан в рамках изучения основ JavaScript, работы с веб-хранилищем и Drag-and-Drop API.', 
      tech: 'HTML5, Vanilla JS, CSS3'
    },
    {
      id: 2, 
      title: 'weather-app', 
      decs: 'Простое, быстрое и удобное веб-приложение для проверки погоды в любом городе мира в реальном времени.',
      tech: 'JavaScript (ES6+), CSS3, HTML5'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Мои проекты</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {projects.map((project) => (
          <div key={project.id} className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Название */}
            <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{project.decs}</p>
            
            <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block">
              {project.tech}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
