// src/components/TaskList.jsx
import Task from './Task';

// src/components/TaskList.jsx

// Принимаем onTaskEdited
function TaskList({ tasks, onTaskToggled, onTaskDeleted, onTaskEdited }) {
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
            onTaskToggled={onTaskToggled}
            onTaskDeleted={onTaskDeleted}
            onTaskEdited={onTaskEdited} // <--- ДОБАВЛЕНО!
          />
        ))}{' '}
      </ul>{' '}
    </section>
  );
}

export default TaskList;
