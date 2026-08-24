"use client";

import { useId, useState } from "react";
import {
  Activity,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

type Role = "student" | "teacher";

const ROLES: { id: Role; label: string }[] = [
  { id: "student", label: "Ученик" },
  { id: "teacher", label: "Учитель" },
];

const CONTENT: Record<
  Role,
  {
    eyebrow: string;
    title: string;
    description: string;
    features: { icon: typeof Sparkles; title: string; text: string }[];
  }
> = {
  student: {
    eyebrow: "Для ученика",
    title: "Задания под ваши пробелы, а не под весь класс",
    description:
      "AI-Ustaz сначала диагностирует, что уже получается, затем даёт персональный набор задач по математике и физике — с разбором, как у репетитора по программе РК.",
    features: [
      {
        icon: ClipboardCheck,
        title: "Диагностика",
        text: "Короткий входной тест показывает слабые темы: дискриминант, Пифагор, законы Ньютона.",
      },
      {
        icon: Sparkles,
        title: "Персонализированные задания",
        text: "Следующие вопросы подстраиваются под ошибки, а не повторяют то, что вы уже знаете.",
      },
      {
        icon: BookOpenCheck,
        title: "Понятный разбор",
        text: "После ответа — объяснение по школьной программе, без «магии» и без готового списывания.",
      },
      {
        icon: Target,
        title: "Ясный прогресс",
        text: "Видно, какие темы закрыты, а какие ещё в зоне риска — и что учить дальше.",
      },
    ],
  },
  teacher: {
    eyebrow: "Для учителя",
    title: "Class Pulse: пульс класса до того, как тема «поплыла»",
    description:
      "Пока вы ведёте урок, платформа собирает картину по 8Б: кто освоил тему, кто молча отстаёт, где спотыкается весь класс.",
    features: [
      {
        icon: Activity,
        title: "Class Pulse",
        text: "Средний балл, доля в зоне риска и кто уже освоил тему — на одном экране.",
      },
      {
        icon: Users,
        title: "Ученики в зоне риска",
        text: "Список тех, кому нужна помощь на этой неделе, а не после контрольной.",
      },
      {
        icon: LineChart,
        title: "Аналитика по темам",
        text: "Где класс буксует: теорема Виета, обратная теорема Пифагора, третий закон Ньютона.",
      },
      {
        icon: GraduationCap,
        title: "Фокус урока",
        text: "Подсказка, что разобрать завтра, вместо проверки пятнадцати тетрадей вручную.",
      },
    ],
  },
};

export function RoleTabs() {
  const tabsId = useId();
  const [role, setRole] = useState<Role>("student");
  const panel = CONTENT[role];

  return (
    <section
      id="vozmozhnosti"
      className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6"
      aria-labelledby={`${tabsId}-heading`}
    >
      <div className="mb-8 text-center">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Возможности
        </p>
        <h2
          id={`${tabsId}-heading`}
          className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Один AI — два кабинета
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Роль на платформе"
        className="mx-auto mb-8 grid w-full max-w-md grid-cols-2 rounded-full border border-border bg-card p-1 shadow-sm"
      >
        {ROLES.map((item) => {
          const selected = role === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tabsId}-${item.id}`}
              aria-selected={selected}
              aria-controls={`${tabsId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setRole(item.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                selected
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${tabsId}-panel`}
        aria-labelledby={`${tabsId}-${role}`}
        className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
      >
        <p className="text-sm font-medium text-primary">{panel.eyebrow}</p>
        <h3 className="mt-2 max-w-2xl text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {panel.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
          {panel.description}
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {panel.features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-border bg-background/80 p-4"
            >
              <feature.icon
                className="size-5 text-primary"
                aria-hidden="true"
              />
              <p className="mt-3 font-semibold text-foreground">
                {feature.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
