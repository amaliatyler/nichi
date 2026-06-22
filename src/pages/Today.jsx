import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconSettings } from "@tabler/icons-react";
import TaskItem from "../components/TaskItem";
import StreakBadge from "../components/StreakBadge";
import ChallengeBar from "../components/ChallengeBar";

const MOCK_TASKS = [
  { id: 1, name: "Йога — 30 минут", meta: "Здоровье · Подготовка", done: true },
  { id: 2, name: "Японский — анки", meta: "Навык · Японский язык", done: true },
  {
    id: 3,
    name: "Читать книгу — 20 стр",
    meta: "Учёба · Подготовка",
    done: false,
  },
  { id: 4, name: "Упражнения на осанку", meta: "Здоровье", done: false },
  {
    id: 5,
    name: "Теория ПДД — урок 3",
    meta: "Жизнь · Получение прав",
    done: false,
  },
];

const MOCK_STREAKS = [
  { id: 1, name: "Японский", days: 12, color: "#c17f6b" },
  { id: 2, name: "Осанка", days: 5, color: "#7c6ff7" },
  { id: 3, name: "Чтение", days: 3, color: "#4ecca3" },
];

const MOCK_CHALLENGE = {
  name: "30 дней йоги",
  total: 30,
  current: 14,
  days: [
    "done",
    "done",
    "done",
    "done",
    "done",
    "done",
    "done",
    "frozen",
    "done",
    "done",
    "done",
    "done",
    "done",
    "today",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ],
};

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Доброе утро";
  if (h < 18) return "Добрый день";
  return "Добрый вечер";
}

function formatDate() {
  return new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

function Today() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(MOCK_TASKS);

  const doneCount = tasks.filter((t) => t.done).length;
  const totalCount = tasks.length;
  const progress = Math.round((doneCount / totalCount) * 100);

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  return (
    <div className="page">
      <div className="today-header">
        <div>
          <p className="today-header__greeting">{getGreeting()}</p>
          <p className="today-header__date">{formatDate()}</p>
        </div>
        <button
          className="today-header__settings"
          aria-label="Настройки"
          onClick={() => navigate("/settings")}>
          <IconSettings size={18} />
        </button>
      </div>

      <div className="today-counter">
        <div className="today-counter__top">
          <span className="today-counter__label">Выполнено сегодня</span>
          <span className="today-counter__value">
            {doneCount} из {totalCount}
          </span>
        </div>
        <div className="today-counter__bar">
          <div
            className="today-counter__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <section className="today-section">
        <h2 className="today-section__label">Задачи</h2>
        <div className="today-tasks">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
            />
          ))}
        </div>
      </section>

      <section className="today-section">
        <h2 className="today-section__label">Стрики</h2>
        <div className="today-streaks">
          {MOCK_STREAKS.map((streak) => (
            <StreakBadge key={streak.id} streak={streak} />
          ))}
        </div>
      </section>

      <section className="today-section">
        <h2 className="today-section__label">Челлендж</h2>
        <ChallengeBar challenge={MOCK_CHALLENGE} />
      </section>
    </div>
  )
};

export default Today;
