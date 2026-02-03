import PropTypes from 'prop-types'; // <-- ЭТО ОБЯЗАТЕЛЬНО
import Task from './Task';

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
            onTaskEdited={onTaskEdited}
          />
        ))}{' '}
      </ul>{' '}
    </section>
  );
}

// Проверка типов
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTaskToggled: PropTypes.func.isRequired,
  onTaskDeleted: PropTypes.func.isRequired,
  onTaskEdited: PropTypes.func.isRequired, // Добавили проверку для редактирования
};

// Значения по умолчанию
TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
