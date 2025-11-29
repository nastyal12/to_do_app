// src/components/TaskList.jsx
import Task from './Task';

// Принимаем новые пропсы
function TaskList({ tasks, onTaskToggled, onTaskDeleted }) {
  return (
    <section className="main">
      <ul className="todo-list">
        {' '}
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            label={task.label}
            completed={task.completed}
            dateCreated={task.dateCreated}
            // ⚠️ Передаем функции в Task
            onTaskToggled={onTaskToggled}
            onTaskDeleted={onTaskDeleted}
          />
        ))}{' '}
      </ul>{' '}
    </section>
  );
}

export default TaskList;
