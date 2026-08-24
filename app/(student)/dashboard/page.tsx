'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Award, Clock, ArrowRight, Flame, Sparkles, CheckCircle2, RefreshCw, ArrowLeft } from 'lucide-react';

export default function StudentDashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('Ученик');
  const [userLevel, setUserLevel] = useState('Средний');
  const [userSubject, setUserSubject] = useState('math');

  const [activeTask, setActiveTask] = useState<{
    title: string;
    question: string;
    hint: string;
    explanation: string;
  } | null>(null);

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const profile = localStorage.getItem('user_profile');
    const savedLevel = localStorage.getItem('user_level');
    const savedSubject = localStorage.getItem('user_subject');

    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        if (parsed.name) setUserName(parsed.name);
        if (parsed.subject) setUserSubject(parsed.subject);
      } catch (e) {
        console.error(e);
      }
    }

    if (savedLevel) setUserLevel(savedLevel);
    if (savedSubject) setUserSubject(savedSubject);
  }, []);

  const handleStartTask = () => {
    setIsGenerating(true);
    setActiveTask(null);

    setTimeout(() => {
      if (userSubject === 'physics') {
        if (userLevel === 'Продвинутый') {
          setActiveTask({
            title: 'Закон Ома и последовательное соединение',
            question: 'Два резистора R₁ = 10 Ом и R₂ = 20 Ом соединены последовательно и подсоединены к источнику 60 В. Найдите силу тока в цепи.',
            hint: 'При последовательном соединении общее сопротивление R = R₁ + R₂. Затем примените I = U / R.',
            explanation: 'Общее R = 30 Ом. Сила тока I = 60 / 30 = 2 Ампера.',
          });
        } else {
          setActiveTask({
            title: 'Закон Ома для участка цепи',
            question: 'К цепи напряжением 220 В подключен резистор сопротивлением 44 Ом. Определите силу тока в цепи.',
            hint: 'Используйте базовую формулу закона Ома: I = U / R.',
            explanation: 'Сила тока I = 220 / 44 = 5 Ампер.',
          });
        }
      } else {
        if (userLevel === 'Продвинутый') {
          setActiveTask({
            title: 'Квадратные уравнения высшего уровня',
            question: 'Найдите корни уравнения: 2x² - 8x + 6 = 0.',
            hint: 'Разделите всё уравнение на 2: x² - 4x + 3 = 0, затем примените D или теорему Виета.',
            explanation: 'D = 16 - 12 = 4. Корни: x₁ = 3, x₂ = 1.',
          });
        } else {
          setActiveTask({
            title: 'Базовые квадратные уравнения',
            question: 'Вычислите дискриминант уравнения x² - 6x + 8 = 0.',
            hint: 'Формула дискриминанта: D = b² - 4ac. В данном случае a=1, b=-6, c=8.',
            explanation: 'D = (-6)² - 4*(1)*(8) = 36 - 32 = 4.',
          });
        }
      }
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Кнопка назад */}
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> На главную
        </button>

        {/* Приветственная карточка */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white rounded-2xl p-6 shadow-md flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Привет, {userName}! 👋</h1>
            <p className="text-teal-100 text-sm mt-1">
              Предмет: <span className="font-semibold">{userSubject === 'physics' ? 'Физика' : 'Математика'}</span> |
              Ваш уровень: <span className="font-bold underline decoration-amber-300">{userLevel}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl backdrop-blur-sm">
            <Flame className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span className="font-bold text-sm">3 дня подряд</span>
          </div>
        </div>

        {/* Метрики */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Пройдено тем</div>
              <div className="text-xl font-bold text-slate-900">12 / 24</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Точность решений</div>
              <div className="text-xl font-bold text-slate-900">84%</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Время в обучении</div>
              <div className="text-xl font-bold text-slate-900">4.5 часа</div>
            </div>
          </div>
        </div>

        {/* Интерактивное задание */}
        {activeTask && (
          <div className="bg-teal-50 border border-teal-300 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-slate-900 text-lg">{activeTask.title}</h3>
              </div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-wider bg-teal-200 px-3 py-1 rounded-md">
                Адаптировано под уровень: {userLevel}
              </span>
            </div>

            <p className="text-slate-800 text-base font-medium bg-white p-4 rounded-xl border border-teal-100">
              {activeTask.question}
            </p>

            <div className="bg-white/80 border border-amber-200 rounded-lg p-3 text-xs text-slate-700">
              <span className="font-bold text-amber-700">💡 Подсказка от AI-Ustaz:</span> {activeTask.hint}
            </div>

            <div className="flex justify-between items-center text-xs text-slate-500 pt-1">
              <span>Решение: {activeTask.explanation}</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Готово к решению
              </span>
            </div>
          </div>
        )}

        {/* Список заданий */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Рекомендуемые задания</h2>
          <div className="space-y-3">
            <div className="p-4 border border-slate-200 rounded-lg flex items-center justify-between hover:border-teal-500 transition">
              <div>
                <h4 className="font-semibold text-slate-800">
                  {userSubject === 'physics' ? 'Закон Ома и Электричество' : 'Квадратные уравнения и Дискриминант'}
                </h4>
                <p className="text-xs text-slate-500">
                  {userSubject === 'physics' ? 'Физика' : 'Алгебра'} • Индивидуальная сложность
                </p>
              </div>
              <button
                onClick={handleStartTask}
                disabled={isGenerating}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-lg flex items-center gap-1 transition disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" /> Подбор...
                  </>
                ) : (
                  <>
                    Начать <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg flex items-center justify-between opacity-75">
              <div>
                <h4 className="font-semibold text-slate-800">
                  {userSubject === 'physics' ? 'Работа и мощность тока' : 'Теорема Виета'}
                </h4>
                <p className="text-xs text-slate-500">Следующая тема</p>
              </div>
              <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md font-medium">Закрыто</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}