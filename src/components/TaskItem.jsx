import { IconCheck, IconCornerDownRight } from '@tabler/icons-react';

function TaskItem({ task, onToggle }) {
  return (
    <div className={`task-item ${task.done ? 'task-item--done' : ''}`}>
      <button
        className={`task-item__check ${task.done ? 'task-item__check--done' : ''}`}
        onClick={onToggle}
        aria-label={task.done ? 'Отметить невыполненным' : 'Отметить выполненным'}
      >
        {task.done && <IconCheck size={12} />}
      </button>

      <div className="task-item__body">
        <p className="task-item__name">{task.name}</p>
        <p className="task-item__meta">{task.meta}</p>
      </div>

      {!task.done && (
        <button className="task-item__transfer" aria-label="Перенести задачу">
          <IconCornerDownRight size={16} />
        </button>
      )}
    </div>
  )
};

export default TaskItem;