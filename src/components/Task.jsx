// src/components/Task.jsx
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

// ⚠️ Принимаем ВСЕ необходимые пропсы, включая id и функции
function Task({
  label,
  completed,
  dateCreated,
  id,
  onTaskToggled,
  onTaskDeleted,
}) {
  // 1. 🟢 ИСПРАВЛЕНИЕ ОШИБКИ: Объявляем переменную className
  let className = completed ? 'completed' : '';
  // В будущем: if (isEditing) { className += ' editing'; }

  return (
    // 2. 🟢 ИСПОЛЬЗУЕМ объявленную переменную
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          // 3. 🟢 ОБРАБОТКА ПЕРЕКЛЮЧЕНИЯ: вызываем функцию из App.jsx
          onChange={() => onTaskToggled(id)}
        />{' '}
        <label>
          <span className="description"> {label} </span>{' '}
          {/* 4. Отображение времени, используя date-fns */}{' '}
          <span className="created">
            {' '}
            created {formatDistanceToNow(dateCreated, { addSuffix: true })}{' '}
          </span>{' '}
        </label>{' '}
        <button className="icon icon-edit"> </button>{' '}
        {/* 5. 🟢 ОБРАБОТКА УДАЛЕНИЯ: вызываем функцию из App.jsx */}{' '}
        <button className="icon icon-destroy" onClick={() => onTaskDeleted(id)}>
          {' '}
        </button>{' '}
      </div>{' '}
      {/* <input type="text" className="edit" value="Editing task" /> */}{' '}
    </li>
  );
}

export default Task;
