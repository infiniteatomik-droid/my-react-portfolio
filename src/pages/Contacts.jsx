import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value
    });
  };

  const isFormInvalid = !formData.name || !formData.email || !formData.message;
 
  return (
    <form 
      onSubmit={(e) => { e.preventDefault(); alert('Форма отправлена!'); }} 
      className="max-w-md mx-auto px-4 py-20 flex flex-col gap-4 text-center"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Контакты</h2>

      <input
        className="border border-slate-200 p-2 rounded focus:outline-none focus:border-blue-500"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
        name="name" 
      />

      <input
        className="border border-slate-200 p-2 rounded focus:outline-none focus:border-blue-500"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        name="email" 
      />

      <textarea
        className="border border-slate-200 p-2 rounded focus:outline-none focus:border-blue-500 h-32"
        value={formData.message}
        onChange={handleChange}
        placeholder="Комментарии"
        name="message" 
      />

      <button 
        disabled={isFormInvalid}
        type="submit" 
        className="p-2 rounded bg-blue-600 text-white font-medium disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
      >
        Отправить
      </button>
    </form>
  );
}
