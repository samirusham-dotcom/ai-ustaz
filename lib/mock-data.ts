import type {
  Assignment,
  ClassPulseStat,
  DiagnosticResult,
  StudentProgress,
  Topic,
  User,
} from "@/types";

export const CLASS_ID = "8B";
export const SCHOOL_NAME = "Общеобразовательная школа №47, г. Алматы";

export const mockUsers: User[] = [
  {
    id: "user-teacher-1",
    name: "Гульнара Есенова",
    role: "teacher",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-01T08:00:00.000Z",
  },
  {
    id: "user-student-01",
    name: "Алихан Нурланов",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:00:00.000Z",
  },
  {
    id: "user-student-02",
    name: "Айгерим Сатпаева",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:01:00.000Z",
  },
  {
    id: "user-student-03",
    name: "Данияр Касымов",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:02:00.000Z",
  },
  {
    id: "user-student-04",
    name: "Камила Жумагалиева",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:03:00.000Z",
  },
  {
    id: "user-student-05",
    name: "Ерлан Бекмуратов",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:04:00.000Z",
  },
  {
    id: "user-student-06",
    name: "Меруерт Ахметова",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:05:00.000Z",
  },
  {
    id: "user-student-07",
    name: "Нурсултан Ибраев",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:06:00.000Z",
  },
  {
    id: "user-student-08",
    name: "Амина Тулегенова",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:07:00.000Z",
  },
  {
    id: "user-student-09",
    name: "Тимур Сериков",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:08:00.000Z",
  },
  {
    id: "user-student-10",
    name: "Жанар Оспанова",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:09:00.000Z",
  },
  {
    id: "user-student-11",
    name: "Арман Калиев",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:10:00.000Z",
  },
  {
    id: "user-student-12",
    name: "Динара Мухамедова",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:11:00.000Z",
  },
  {
    id: "user-student-13",
    name: "Санжар Абдуллин",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:12:00.000Z",
  },
  {
    id: "user-student-14",
    name: "Асель Рахимова",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:13:00.000Z",
  },
  {
    id: "user-student-15",
    name: "Бауыржан Тлеубердиев",
    role: "student",
    classId: CLASS_ID,
    grade: 8,
    school: SCHOOL_NAME,
    createdAt: "2026-08-10T09:14:00.000Z",
  },
];

export const mockStudents = mockUsers.filter((user) => user.role === "student");
export const mockTeacher = mockUsers.find((user) => user.role === "teacher")!;

export const mockTopics: Topic[] = [
  {
    id: "topic-quadratic",
    subject: "math",
    title: "Квадратные уравнения",
    description:
      "Алгебра 8 класса (ГОСО РК): вид ax² + bx + c = 0, дискриминант, формула корней, теорема Виета, неполные квадратные уравнения.",
    grade: 8,
    sortOrder: 1,
  },
  {
    id: "topic-pythagoras",
    subject: "math",
    title: "Теорема Пифагора",
    description:
      "Геометрия 8 класса (ГОСО РК): соотношение сторон прямоугольного треугольника, египетский треугольник, прикладные задачи.",
    grade: 8,
    sortOrder: 2,
  },
  {
    id: "topic-newton",
    subject: "physics",
    title: "Законы Ньютона",
    description:
      "Физика 8–9 классов (ГОСО РК): инерция, F = ma, действие и противодействие, единицы СИ.",
    grade: 8,
    sortOrder: 1,
  },
];

export const mockAssignments: Assignment[] = [
  {
    id: "assignment-quadratic",
    topicId: "topic-quadratic",
    title: "Квадратные уравнения — проверочная работа",
    difficulty: "medium",
    questions: [
      {
        id: "q-quad-1",
        prompt:
          "Какое из уравнений является квадратным в общем виде ax² + bx + c = 0, где a ≠ 0?",
        options: [
          "3x − 7 = 0",
          "2x² − 5x + 3 = 0",
          "x³ + x − 1 = 0",
          "√x + 4 = 0",
        ],
        correctIndex: 1,
        explanation:
          "По программе алгебры 8 класса РК квадратным называют уравнение вида ax² + bx + c = 0, где a, b, c — действительные числа и старший коэффициент a ≠ 0. Уравнение 2x² − 5x + 3 = 0 имеет степень 2 и a = 2 ≠ 0. Линейное 3x − 7 = 0 — первой степени, x³ + x − 1 = 0 — кубическое, √x + 4 = 0 — иррациональное.",
        difficulty: "easy",
      },
      {
        id: "q-quad-2",
        prompt: "Найдите дискриминант уравнения x² − 6x + 8 = 0.",
        options: ["4", "36", "8", "20"],
        correctIndex: 0,
        explanation:
          "Дискриминант D = b² − 4ac. Здесь a = 1, b = −6, c = 8. Тогда D = (−6)² − 4 · 1 · 8 = 36 − 32 = 4. Если D > 0, уравнение имеет два различных действительных корня; D = 4 > 0, значит корни есть: x = (6 ± 2) / 2, то есть x₁ = 4, x₂ = 2. Это стандартный приём из учебника алгебры 8 класса.",
        difficulty: "easy",
      },
      {
        id: "q-quad-3",
        prompt: "Сколько действительных корней имеет уравнение x² + 4x + 5 = 0?",
        options: ["Два различных", "Один (два совпадающих)", "Ни одного", "Бесконечно много"],
        correctIndex: 2,
        explanation:
          "D = 4² − 4 · 1 · 5 = 16 − 20 = −4 < 0. При отрицательном дискриминанте действительных корней нет (в школьном курсе 8 класса работают в множестве действительных чисел). График параболы y = x² + 4x + 5 лежит выше оси Ox: вершина в x = −2, y = 1 > 0, ветви направлены вверх.",
        difficulty: "medium",
      },
      {
        id: "q-quad-4",
        prompt:
          "По теореме Виета для приведённого уравнения x² − 5x + 6 = 0 сумма и произведение корней равны:",
        options: [
          "сумма 6, произведение −5",
          "сумма −5, произведение 6",
          "сумма 5, произведение 6",
          "сумма 6, произведение 5",
        ],
        correctIndex: 2,
        explanation:
          "Для приведённого квадратного уравнения x² + px + q = 0 теорема Виета: x₁ + x₂ = −p, x₁ · x₂ = q. Запись x² − 5x + 6 = 0 означает p = −5, q = 6, поэтому сумма корней равна 5, произведение равно 6. Проверка: корни 2 и 3, 2 + 3 = 5, 2 · 3 = 6. Теорема Виета входит в обязательный минимум алгебры 8 класса РК.",
        difficulty: "medium",
      },
      {
        id: "q-quad-5",
        prompt:
          "Решите неполное квадратное уравнение x² − 9 = 0. Какие корни получаются?",
        options: ["x = 9 и x = −9", "x = 3 и x = −3", "только x = 3", "x = 0 и x = 9"],
        correctIndex: 1,
        explanation:
          "Неполное уравнение вида x² − c = 0 (b = 0) решают как разность квадратов: x² − 9 = (x − 3)(x + 3) = 0, откуда x = 3 или x = −3. Можно извлечь квадратный корень: x = ±√9 = ±3. Не путать с линейным сдвигом: уравнение (x − 9)² = 0 имело бы один корень x = 9. В ГОСО отдельно отрабатывают случаи ax² + c = 0, ax² + bx = 0 и ax² = 0.",
        difficulty: "hard",
      },
    ],
  },
  {
    id: "assignment-pythagoras",
    topicId: "topic-pythagoras",
    title: "Теорема Пифагора — проверочная работа",
    difficulty: "medium",
    questions: [
      {
        id: "q-pyth-1",
        prompt: "Как формулируется теорема Пифагора для прямоугольного треугольника?",
        options: [
          "Сумма катетов равна гипотенузе",
          "Квадрат гипотенузы равен сумме квадратов катетов",
          "Произведение катетов равно квадрату гипотенузы",
          "Гипотенуза равна полусумме катетов",
        ],
        correctIndex: 1,
        explanation:
          "Теорема Пифагора (геометрия 8 класса): в прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов: c² = a² + b², где c — сторона, лежащая против прямого угла. Обратная теорема: если a² + b² = c², треугольник прямоугольный. Равенство a + b = c для сторон не выполняется (это нарушило бы неравенство треугольника в строгом смысле для положительных длин при прямом угле).",
        difficulty: "easy",
      },
      {
        id: "q-pyth-2",
        prompt: "Катеты прямоугольного треугольника равны 6 см и 8 см. Найдите гипотенузу.",
        options: ["10 см", "14 см", "48 см", "7 см"],
        correctIndex: 0,
        explanation:
          "c = √(a² + b²) = √(36 + 64) = √100 = 10 см. Это «египетский» треугольник 6-8-10 — подобный знаменитому 3-4-5 (коэффициент подобия 2). В задачах ОЖС и СОРах 8 класса такие тройки используют для устного счёта без калькулятора.",
        difficulty: "easy",
      },
      {
        id: "q-pyth-3",
        prompt:
          "Может ли треугольник со сторонами 5 см, 12 см и 13 см быть прямоугольным?",
        options: [
          "Да, прямой угол против стороны 13 см",
          "Да, прямой угол против стороны 12 см",
          "Нет, сумма квадратов не сходится",
          "Да, все углы острые",
        ],
        correctIndex: 0,
        explanation:
          "Проверяем обратную теорему Пифагора: сравниваем квадрат большей стороны с суммой квадратов двух меньших. 13² = 169, 5² + 12² = 25 + 144 = 169. Равенство выполняется, значит угол, лежащий против стороны 13 см, прямой. Тройка 5-12-13 — ещё одна пифагорова тройка из школьной программы.",
        difficulty: "medium",
      },
      {
        id: "q-pyth-4",
        prompt:
          "Гипотенуза равна 15 м, один катет равен 9 м. Чему равен второй катет?",
        options: ["6 м", "12 м", "24 м", "√54 м"],
        correctIndex: 1,
        explanation:
          "Из c² = a² + b² следует b = √(c² − a²) = √(225 − 81) = √144 = 12 м. Важно вычитать квадрат катета из квадрата гипотенузы, а не складывать: ошибка b = √(15² + 9²) даёт другой треугольник. Получается тройка 9-12-15, подобная 3-4-5.",
        difficulty: "medium",
      },
      {
        id: "q-pyth-5",
        prompt:
          "Лестница длиной 5 м приставлена к стене. Нижний конец отстоит от стены на 3 м. На какой высоте находится верхний конец лестницы?",
        options: ["2 м", "4 м", "8 м", "√34 м"],
        correctIndex: 1,
        explanation:
          "Модель: прямоугольный треугольник, гипотенуза — лестница (5 м), один катет — расстояние до стены (3 м), второй — высота. h = √(5² − 3²) = √(25 − 9) = √16 = 4 м. Это классическая прикладная задача геометрии 8 класса: теорема Пифагора в контексте «лестница — стена — пол».",
        difficulty: "hard",
      },
    ],
  },
  {
    id: "assignment-newton",
    topicId: "topic-newton",
    title: "Законы Ньютона — проверочная работа",
    difficulty: "medium",
    questions: [
      {
        id: "q-newt-1",
        prompt: "Первый закон Ньютона (закон инерции) утверждает, что:",
        options: [
          "Сила всегда равна произведению массы на ускорение",
          "Тело сохраняет покой или равномерное прямолинейное движение, если равнодействующая сил равна нулю",
          "Действие равно противодействию и направлено противоположно",
          "Импульс системы всегда равен нулю",
        ],
        correctIndex: 1,
        explanation:
          "Первый закон Ньютона (физика 8–9 классов, динамика): существуют инерциальные системы отсчёта, в которых тело покоится или движется равномерно и прямолинейно, если на него не действуют силы или равнодействующая равна нулю. Инерция — свойство тела сохранять скорость. Формула F = ma относится ко второму закону, а «действие = противодействие» — к третьему.",
        difficulty: "easy",
      },
      {
        id: "q-newt-2",
        prompt:
          "На брусок массой 2 кг действует равнодействующая сила 10 Н. Чему равно ускорение бруска? (Сопротивлением пренебречь.)",
        options: ["5 м/с²", "12 м/с²", "20 м/с²", "0,2 м/с²"],
        correctIndex: 0,
        explanation:
          "Второй закон Ньютона в СИ: F = ma, откуда a = F / m = 10 Н / 2 кг = 5 м/с². Единица силы: 1 Н = 1 кг · м/с². Направление ускорения совпадает с направлением равнодействующей. Типичная ошибка — умножить F на m вместо деления.",
        difficulty: "easy",
      },
      {
        id: "q-newt-3",
        prompt: "Согласно третьему закону Ньютона, силы действия и противодействия:",
        options: [
          "Приложены к одному телу и уравновешивают друг друга",
          "Равны по модулю, противоположны по направлению и приложены к разным телам",
          "Всегда перпендикулярны скорости",
          "Существуют только при трении",
        ],
        correctIndex: 1,
        explanation:
          "Третий закон: F₁₂ = −F₂₁. Силы равны по модулю, противоположны по направлению, одной природы и действуют на разные тела, поэтому не составляют равнодействующую «на одном объекте» и не уничтожают друг друга. Пример из учебника: книга давит на стол, стол действует на книгу с такой же по модулю силой вверх (сила нормальной реакции).",
        difficulty: "medium",
      },
      {
        id: "q-newt-4",
        prompt:
          "Какое из явлений лучше всего иллюстрирует инерцию?",
        options: [
          "Нагревание проводника при токе",
          "Пассажир отклоняется назад при резком старте автобуса",
          "Преломление света в воде",
          "Кипение воды при 100 °C на уровне моря",
        ],
        correctIndex: 1,
        explanation:
          "При резком старте пол автобуса ускоряется вперёд, а тело пассажира по инерции стремится сохранить прежнюю (почти нулевую) скорость относительно земли — относительно автобуса это выглядит как отклонение назад. Это качественная задача на первый закон Ньютона из курса физики РК. Остальные варианты относятся к электричеству, оптике и тепловым явлениям.",
        difficulty: "medium",
      },
      {
        id: "q-newt-5",
        prompt:
          "Тележка массой 4 кг разгоняется из покоя с ускорением 2 м/с² в течение 3 с. Чему равна равнодействующая сила и какой путь пройдёт тележка за это время?",
        options: [
          "F = 8 Н, s = 9 м",
          "F = 6 Н, s = 6 м",
          "F = 8 Н, s = 6 м",
          "F = 2 Н, s = 12 м",
        ],
        correctIndex: 0,
        explanation:
          "Сила: F = ma = 4 · 2 = 8 Н. Движение из покоя (v₀ = 0) равноускоренное: s = v₀t + at² / 2 = 0 + 2 · 9 / 2 = 9 м. Связка динамики (второй закон) и кинематики — типичный приём контрольных работ 8–9 классов. Ошибка s = at = 6 м возникает, если забыть коэффициент 1/2 в формуле пути.",
        difficulty: "hard",
      },
    ],
  },
];

/** Баллы 0–100 по трём темам для каждого из 15 учеников (порядок: квадратные, Пифагор, Ньютон). */
const SCORE_MATRIX: [number, number, number][] = [
  [92, 88, 80],
  [100, 96, 92],
  [40, 48, 36],
  [76, 84, 72],
  [28, 32, 24],
  [88, 80, 84],
  [52, 44, 60],
  [96, 92, 88],
  [64, 56, 48],
  [84, 76, 80],
  [20, 36, 28],
  [72, 68, 64],
  [48, 52, 40],
  [80, 88, 76],
  [36, 28, 44],
];

const WEAK_BY_TOPIC: Record<string, string[]> = {
  "topic-quadratic": ["дискриминант", "теорема Виета"],
  "topic-pythagoras": ["обратная теорема", "прикладные задачи"],
  "topic-newton": ["третий закон", "связка F = ma и кинематика"],
};

function progressFromScore(
  studentIndex: number,
  topicIndex: number,
  topicId: string,
  assignmentId: string,
  scorePercent: number,
): StudentProgress {
  const totalCount = 5;
  const correctCount = Math.round((scorePercent / 100) * totalCount);
  const day = 12 + studentIndex;
  const hour = 10 + topicIndex;

  return {
    id: `progress-${String(studentIndex + 1).padStart(2, "0")}-t${topicIndex + 1}`,
    studentId: mockStudents[studentIndex].id,
    topicId,
    assignmentId,
    completed: scorePercent >= 40,
    scorePercent,
    correctCount,
    totalCount,
    lastAttemptAt: `2026-08-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:15:00.000Z`,
    weakAreas: scorePercent < 70 ? WEAK_BY_TOPIC[topicId] : [],
  };
}

export const mockStudentProgress: StudentProgress[] = SCORE_MATRIX.flatMap(
  (scores, studentIndex) =>
    mockTopics.map((topic, topicIndex) =>
      progressFromScore(
        studentIndex,
        topicIndex,
        topic.id,
        mockAssignments[topicIndex].id,
        scores[topicIndex],
      ),
    ),
);

export const mockDiagnosticResults: DiagnosticResult[] = mockStudents.map(
  (student, index) => {
    const [mathQuad, mathPyth, physics] = SCORE_MATRIX[index];
    const mathOverall = Math.round((mathQuad + mathPyth) / 2);
    const weakMath =
      mathQuad <= mathPyth ? "topic-quadratic" : "topic-pythagoras";

    return {
      id: `diag-${student.id}`,
      studentId: student.id,
      subject: mathOverall <= physics ? "math" : "physics",
      takenAt: `2026-08-11T08:${String(index).padStart(2, "0")}:00.000Z`,
      overallScore: Math.round((mathQuad + mathPyth + physics) / 3),
      topicScores: [
        { topicId: "topic-quadratic", scorePercent: mathQuad },
        { topicId: "topic-pythagoras", scorePercent: mathPyth },
        { topicId: "topic-newton", scorePercent: physics },
      ],
      recommendedTopicIds: [
        mathOverall < 70 ? weakMath : physics < 70 ? "topic-newton" : weakMath,
      ],
    };
  },
);

function pulseForTopic(topicId: string): ClassPulseStat {
  const rows = mockStudentProgress.filter((row) => row.topicId === topicId);
  const totalStudents = rows.length;
  const averageScore = Math.round(
    rows.reduce((sum, row) => sum + row.scorePercent, 0) / totalStudents,
  );

  return {
    classId: CLASS_ID,
    topicId,
    averageScore,
    studentsAtRisk: rows.filter((row) => row.scorePercent < 50).length,
    studentsMastered: rows.filter((row) => row.scorePercent >= 80).length,
    totalStudents,
    commonMistakes: WEAK_BY_TOPIC[topicId],
  };
}

export const mockClassPulseStats: ClassPulseStat[] = mockTopics.map((topic) =>
  pulseForTopic(topic.id),
);

export function getTopicById(id: string) {
  return mockTopics.find((topic) => topic.id === id);
}

export function getAssignmentByTopicId(topicId: string) {
  return mockAssignments.find((assignment) => assignment.topicId === topicId);
}

export function getProgressForStudent(studentId: string) {
  return mockStudentProgress.filter((row) => row.studentId === studentId);
}
