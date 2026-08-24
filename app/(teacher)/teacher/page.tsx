'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Users, AlertTriangle, CheckCircle, Sparkles, RefreshCw, FileText, ArrowLeft, User, Filter } from 'lucide-react';

const defaultStudents = [
  { id: 1, name: 'Алихан Смаилов', grade: '9', risk: 'high', score: '45%', topic: 'Квадратные уравнения', level: 'Базовый' },
  { id: 2, name: 'Диана Сатпаева', grade: '9', risk: 'medium', score: '68%', topic: 'Теорема Виета', level: 'Средний' },
  { id: 3, name: 'Санжар Нурланов', grade: '10', risk: 'low', score: '92%', topic: 'Олимпиадная алгебра', level: 'Продвинутый' },
];

export default function TeacherDashboard() {
  const router = useRouter();
  const [teacherName, setTeacherName] = useState('Учитель');
  const [selectedGrade, setSelectedGrade] = useState('9');
  const [selectedSubject, setSelectedSubject] = useState('math');
  const [selectedTopic, setSelectedTopic] = useState('Квадратные уравнения');
  const [studentsList, setStudentsList] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLesson, setGeneratedLesson] = useState<any>(null);

  useEffect(() => {
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        if (parsed.name && parsed.role === 'teacher') setTeacherName(parsed.name);
        if (parsed.grade) setSelectedGrade(parsed.grade);
        if (parsed.subject) {
          setSelectedSubject(parsed.subject);
          setSelectedTopic(parsed.subject === 'physics' ? 'Закон Ома' : 'Квадратные уравнения');
        }
      } catch (e) {
        console.error(e);
      }
    }

    const savedStudents = localStorage.getItem('class_students');
    if (savedStudents) {
      try {
        const parsed = JSON.parse(savedStudents);
        setStudentsList([...parsed, ...defaultStudents]);
      } catch (e) {
        setStudentsList(defaultStudents);
      }
    } else {
      setStudentsList(defaultStudents);
    }
  }, []);

  // Фильтр по параллели (выбираем просто класс без букв)
  const filteredStudents = studentsList.filter(
    (s) => String(s.grade) === String(selectedGrade)
  );

  const handleGenerateLesson = () => {
    setIsGenerating(true);
    setGeneratedLesson(null);

    setTimeout(() => {
      setGeneratedLesson({
        title: `План урока для ${selectedGrade} класса: ${selectedTopic || 'Квадратные уравнения'}`,
        duration: '45 минут',
        objective: 'Сформировать навыки решения задач и закрыть пробелы учеников.',
        levelA: 'Базовый (для группы риска): Формулы и простая подстановка.',
        levelB: 'Средний: Стандартные задачи из учебной программы.',
        levelC: 'Продвинутый: Задания повышенного уровня сложности.',
      });
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> На главную
        </button>

        {/* Шапка с именем учителя */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">
                Учитель: {teacherName}
              </h1>
              <p className="text-slate-500 text-sm mt-0.5">
                Панель управления и ИИ-аналитика по параллелям
              </p>
            </div>
          </div>

          {/* Селектор классов без букв */}
          <div className="flex items-center gap-3 bg-teal-50 border border-teal-200 p-2 rounded-xl">
            <Filter className="w-4 h-4 text-teal-700 ml-1" />
            <span className="text-xs font-bold text-teal-900">Показать:</span>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="bg-white text-slate-900 font-bold text-sm border border-teal-300 rounded-lg px-3 py-1.5 focus:outline-none"
            >
              {[7, 8, 9, 10, 11, 12].map((g) => (
                <option key={g} value={g}>{g} класс</option>
              ))}
            </select>
          </div>
        </div>

        {/* Генератор уроков */}
        <div className="bg-white border border-teal-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-teal-100 text-teal-700 rounded-xl">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">ИИ-Генератор поурочного плана</h2>
                <p className="text-xs text-slate-500">Автоматический подбор заданий под {selectedGrade} класс</p>
              </div>
            </div>

            <button
              onClick={handleGenerateLesson}
              disabled={isGenerating}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-lg flex items-center gap-2 transition disabled:opacity-50 shadow-sm"
            >
              {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
              Сгенерировать план
            </button>
          </div>

          {generatedLesson && (
            <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-5 space-y-3">
              <div className="flex justify-between items-center border-b border-teal-200/60 pb-2">
                <h3 className="font-bold text-slate-900">{generatedLesson.title}</h3>
                <span className="text-xs bg-teal-200 text-teal-800 font-bold px-3 py-1 rounded-full">
                  {generatedLesson.duration}
                </span>
              </div>
              <p className="text-xs text-slate-700">{generatedLesson.objective}</p>
            </div>
          )}
        </div>

        {/* Список всех учеников выбранного класса */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Все ученики {selectedGrade} класса ({filteredStudents.length} чел.)
            </h2>
            <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
              Синхронизировано
            </span>
          </div>

          {filteredStudents.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {filteredStudents.map((student) => (
                <div key={student.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-800 font-bold text-sm flex items-center justify-center">
                      {student.name[0]}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm flex items-center gap-2">
                        {student.name}
                        {student.level && (
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">
                            Уровень: {student.level}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-400">Слабая тема: {student.topic}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-slate-700">{student.score}</span>
                    {student.risk === 'high' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        <AlertTriangle className="w-3.5 h-3.5" /> Нужна помощь
                      </span>
                    ) : student.risk === 'medium' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                        Средне
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                        <CheckCircle className="w-3.5 h-3.5" /> Отлично
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-400 text-sm border border-dashed border-slate-200 rounded-xl">
              В {selectedGrade} классе пока нет зарегистрированных учеников.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}