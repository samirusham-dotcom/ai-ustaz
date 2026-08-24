'use client';

import Link from 'next/link';
import { BookOpen, UserCheck, LayoutDashboard, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Шапка сайта */}
      <header className="bg-white border-b border-slate-200 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">AI-Ustaz</span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/onboarding"
              className="px-4 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition"
            >
              Войти / Регистрация
            </Link>
            <Link
              href="/teacher"
              className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition"
            >
              Учителям
            </Link>
          </div>
        </div>
      </header>

      {/* Главный блок */}
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 bg-teal-100 rounded-full">
            Интеллектуальная образовательная платформа
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Персонализированное обучение и мониторинг с AI-Ustaz
          </h1>
          <p className="text-lg text-slate-600">
            ИИ-платформа, которая проводит диагностику знаний ученика, выстраивает индивидуальный трек и помогает учителям отслеживать прогресс класса в реальном времени.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/onboarding"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl shadow-md flex items-center gap-2 transition"
            >
              Пройти регистрацию <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Навигация по демо-разделам (быстрый доступ для жюри) */}
        <div className="mt-20">
          <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            Навигация по разделам платформы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Карточка 1: Онбординг и Диагностика */}
            <Link
              href="/onboarding"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition group"
            >
              <div className="p-3 bg-teal-50 text-teal-600 rounded-xl w-fit mb-4 group-hover:bg-teal-600 group-hover:text-white transition">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">1. Регистрация и Тест</h3>
              <p className="text-sm text-slate-500 mb-4">Онбординг ученика и экспресс-диагностика начального уровня знаний.</p>
              <span className="text-sm font-semibold text-teal-600 flex items-center gap-1">
                Открыть <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Карточка 2: Кабинет Ученика */}
            <Link
              href="/dashboard"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition group"
            >
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl w-fit mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">2. Кабинет Ученика</h3>
              <p className="text-sm text-slate-500 mb-4">Персональный учебный трек, рекомендации задач и статистика успеваемости.</p>
              <span className="text-sm font-semibold text-indigo-600 flex items-center gap-1">
                Открыть <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Карточка 3: Панель Учителя */}
            <Link
              href="/teacher"
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-lg transition group"
            >
              <div className="p-3 bg-amber-50 text-amber-600 rounded-xl w-fit mb-4 group-hover:bg-amber-600 group-hover:text-white transition">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">3. Class Pulse (Учитель)</h3>
              <p className="text-sm text-slate-500 mb-4">Аналитика по всему классу, выявление отстающих учеников и динамика.</p>
              <span className="text-sm font-semibold text-amber-600 flex items-center gap-1">
                Открыть <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

          </div>
        </div>
      </main>
    </div>
  );
}