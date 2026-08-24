'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, AlertCircle, ArrowRight, Atom, Calculator, ArrowLeft } from 'lucide-react';

const mathQuestions = [
  { id: 1, question: 'Чему равен дискриминант (D) для уравнения x² - 5x + 6 = 0?', options: ['D = 1', 'D = 25', 'D = 0', 'D = -1'], correct_answer: 0 },
  { id: 2, question: 'Каковы корни уравнения x² - 5x + 6 = 0 по теореме Виета?', options: ['x₁ = -2, x₂ = -3', 'x₁ = 2, x₂ = 3', 'x₁ = 1, x₂ = 6', 'x₁ = -1, x₂ = 5'], correct_answer: 1 },
  { id: 3, question: 'Чему равна сумма углов в любом треугольнике?', options: ['90°', '360°', '180°', '270°'], correct_answer: 2 },
  { id: 4, question: 'Чему равно значение выражения 2⁴?', options: ['8', '12', '16', '64'], correct_answer: 2 },
];

const physicsQuestions = [
  { id: 1, question: 'Какая из формул выражает закон Ома для участка цепи?', options: ['I = U / R', 'F = m * a', 'E = m * c²', 'P = I * U'], correct_answer: 0 },
  { id: 2, question: 'В каких единицах измеряется электрическое сопротивление в СИ?', options: ['Ампер (А)', 'Вольт (В)', 'Ом (Ом)', 'Джоуль (Дж)'], correct_answer: 2 },
  { id: 3, question: 'Как изменится сила тока при увеличении напряжения в 2 раза?', options: ['Увеличится в 2 раза', 'Уменьшится в 2 раза', 'Не изменится', 'Увеличится в 4 раза'], correct_answer: 0 },
  { id: 4, question: 'Какой прибор используется для измерения силы тока?', options: ['Вольтметр', 'Амперметр', 'Омметр', 'Динамометр'], correct_answer: 1 },
];

export default function DiagnosticPage() {
  const router = useRouter();
  const [subject, setSubject] = useState<'math' | 'physics'>('math');
  const [questions, setQuestions] = useState(mathQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const profile = localStorage.getItem('user_profile');
    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        if (parsed.subject === 'physics') {
          setSubject('physics');
          setQuestions(physicsQuestions);
        } else {
          setSubject('math');
          setQuestions(mathQuestions);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubjectChange = (newSubject: 'math' | 'physics') => {
    setSubject(newSubject);
    setQuestions(newSubject === 'physics' ? physicsQuestions : mathQuestions);
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setIsCompleted(false);
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const updated = [...selectedAnswers, optionIndex];
    setSelectedAnswers(updated);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateResults = () => {
    let score = 0;
    selectedAnswers.forEach((ans, idx) => {
      if (ans === questions[idx].correct_answer) score++;
    });

    const percent = Math.round((score / questions.length) * 100);
    let level = 'Базовый';
    let risk = 'high';

    if (percent >= 75) {
      level = 'Продвинутый';
      risk = 'low';
    } else if (percent >= 50) {
      level = 'Средний';
      risk = 'medium';
    }

    // Сохраняем индивидуальный уровень
    localStorage.setItem('user_level', level);
    localStorage.setItem('user_subject', subject);

    // КОННЕКТ С УЧИТЕЛЕМ: Сохраняем ученика в общий класс
    const profile = localStorage.getItem('user_profile');
    let studentName = 'Самира';
    let studentGrade = '10';

    if (profile) {
      try {
        const parsed = JSON.parse(profile);
        if (parsed.name) studentName = parsed.name;
        if (parsed.grade) studentGrade = parsed.grade;
      } catch (e) {
        console.error(e);
      }
    }

    const newStudent = {
      id: Date.now(),
      name: studentName,
      grade: studentGrade,
      risk: risk,
      score: `${percent}%`,
      topic: subject === 'physics' ? 'Закон Ома' : 'Квадратные уравнения',
      level: level
    };

    const existingStudents = JSON.parse(localStorage.getItem('class_students') || '[]');
    // Заменяем дубликат, если регистрировался с таким же именем, или добавляем
    const filtered = existingStudents.filter((s: any) => s.name !== studentName);
    localStorage.setItem('class_students', JSON.stringify([newStudent, ...filtered]));

    return { score, total: questions.length, level };
  };

  if (isCompleted) {
    const results = calculateResults();
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative">
        <button
          onClick={() => router.push('/')}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> На главную
        </button>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 max-w-md w-full text-center">
          <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Диагностика завершена!</h2>
          <p className="text-slate-600 mb-2">
            Предмет: <span className="font-semibold text-slate-900">{subject === 'physics' ? 'Физика' : 'Математика'}</span>
          </p>
          <p className="text-slate-600 mb-6">
            Ваш результат: <span className="font-semibold text-slate-900">{results.score} из {results.total}</span>
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-teal-800">Определенный уровень</span>
            <div className="text-xl font-bold text-teal-700 mt-1">{results.level}</div>
          </div>

          <button
            onClick={() => router.push('/dashboard')}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition"
          >
            В личный кабинет <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 relative">
      <button
        onClick={() => router.push('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm transition"
      >
        <ArrowLeft className="w-4 h-4" /> На главную
      </button>

      <div className="bg-white rounded-xl shadow-md border border-slate-200 max-w-xl w-full p-6">
        <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
          <div className="flex gap-2">
            <button
              onClick={() => handleSubjectChange('math')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                subject === 'math' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Calculator className="w-4 h-4" /> Математика
            </button>
            <button
              onClick={() => handleSubjectChange('physics')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                subject === 'physics' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Atom className="w-4 h-4" /> Физика
            </button>
          </div>
          <span className="text-xs text-slate-500 font-medium">Диагностика знаний</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
            Вопрос {currentIndex + 1} из {questions.length}
          </span>
        </div>

        <div className="w-full bg-slate-100 rounded-full h-2 mb-6">
          <div
            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-6">{questions[currentIndex].question}</h3>

        <div className="space-y-3">
          {questions[currentIndex].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswerSelect(idx)}
              className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-teal-500 hover:bg-teal-50/50 transition font-medium text-slate-700 flex items-center justify-between group"
            >
              <span>{opt}</span>
              <span className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-teal-500 flex items-center justify-center text-xs text-slate-400 group-hover:text-teal-600">
                {String.fromCharCode(65 + idx)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}