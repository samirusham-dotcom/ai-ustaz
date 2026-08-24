'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'teacher'>('student');
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('9');
  const [subject, setSubject] = useState('math');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Сохраняем данные профиля
    const userProfile = {
      name: name.trim(),
      role,
      grade,
      subject,
    };
    localStorage.setItem('user_profile', JSON.stringify(userProfile));

    if (role === 'teacher') {
      router.push('/teacher');
    } else {
      router.push('/diagnostic');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative">
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> На главную
      </button>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-md w-full shadow-lg">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">Регистрация в AI-Ustaz</h1>
        <p className="text-slate-500 text-sm mb-6 text-center">Укажите свои данные для настройки системы</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Выбор роли */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Вы кто?</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`p-3.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition ${
                  role === 'student'
                    ? 'border-teal-600 bg-teal-50 text-teal-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <User className="w-4 h-4" /> Ученик
              </button>
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`p-3.5 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition ${
                  role === 'teacher'
                    ? 'border-teal-600 bg-teal-50 text-teal-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <GraduationCap className="w-4 h-4" /> Учитель
              </button>
            </div>
          </div>

          {/* Ввод имени */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {role === 'teacher' ? 'ФИО Учителя' : 'Ваше Имя'}
            </label>
            <input
              type="text"
              required
              placeholder={role === 'teacher' ? 'Например: Айгуль Сериковна' : 'Например: Самира'}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          {/* Выбор класса */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {role === 'teacher' ? 'Основной класс преподавания' : 'Ваш класс'}
            </label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium"
            >
              {[7, 8, 9, 10, 11, 12].map((g) => (
                <option key={g} value={g}>{g} класс</option>
              ))}
            </select>
          </div>

          {/* Предмет */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Предмет</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm font-medium"
            >
              <option value="math">Математика</option>
              <option value="physics">Физика</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition shadow-md mt-2"
          >
            Продолжить <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}