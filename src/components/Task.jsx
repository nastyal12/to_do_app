import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function Task({
  id,
  label,
  completed,
  dateCreated,
  onTaskToggled,
  onTaskDeleted,
  onTaskEdited, // <-- Не забываем этот пропс!
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(label);
  const [, setTick] = useState(0);

  // Автоматическое обновление времени каждую минуту
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onTaskEdited(id, editValue.trim());
      setIsEditing(false);
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(label);
    }
  };

  // Формируем классы: 'completed', 'editing' или оба
  let classNames = '';
  if (completed) classNames += 'completed';
  if (isEditing) classNames += ' editing';

  return (
    <li className={classNames}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onTaskToggled(id)}
        />{' '}
        <label>
          <span className="description"> {label} </span>{' '}
          <span className="created">
            created{' '}
            {formatDistanceToNow(dateCreated, {
              addSuffix: true,
              includeSeconds: true,
            })}{' '}
          </span>{' '}
        </label>{' '}
        {/* Кнопка теперь открывает режим редактирования */}{' '}
        <button className="icon icon-edit" onClick={() => setIsEditing(true)}>
          {' '}
        </button>{' '}
        <button className="icon icon-destroy" onClick={() => onTaskDeleted(id)}>
          {' '}
        </button>{' '}
      </div>{' '}
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      )}{' '}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  completed: PropTypes.bool,
  dateCreated: PropTypes.instanceOf(Date).isRequired,
  onTaskToggled: PropTypes.func.isRequired,
  onTaskDeleted: PropTypes.func.isRequired,
  onTaskEdited: PropTypes.func.isRequired, // <-- Добавили в проверку
};

Task.defaultProps = {
  completed: false,
};

export default Task;
