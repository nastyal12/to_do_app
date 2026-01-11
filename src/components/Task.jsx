// src/components/Task.jsx
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

function Task({
  label,
  completed,
  dateCreated,
  id,
  onTaskToggled,
  onTaskDeleted,
  onTaskEdited,
}) {
  // 1. Состояние для режима редактирования (открыто/закрыто)
  const [isEditing, setIsEditing] = useState(false);
  // 2. Состояние для текста, который мы редактируем
  const [editValue, setEditValue] = useState(label);

  // 3. Класс для <li>
  let className = completed ? 'completed' : '';
  if (isEditing) {
    className += ' editing'; // Добавляем класс 'editing'
  }

  // 4. Обработка нажатия Enter для сохранения
  const handleEditSubmit = (event) => {
    if (event.key === 'Enter') {
      const newLabel = editValue.trim();

      // Если текст не пустой, вызываем функцию обновления
      if (newLabel) {
        onTaskEdited(id, newLabel);
      }
      setIsEditing(false); // Выходим из режима редактирования
    }
  };

  // 5. Обработка открытия режима редактирования
  const handleEditClick = () => {
    setIsEditing(true);
    setEditValue(label); // Убедимся, что начальное значение равно текущему label
  };

  return (
    <li className={className}>
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
            {' '}
            created {formatDistanceToNow(dateCreated, { addSuffix: true })}{' '}
          </span>{' '}
        </label>{' '}
        {/* 6. Клик по карандашу открывает редактирование */}{' '}
        <button className="icon icon-edit" onClick={handleEditClick}>
          {' '}
        </button>{' '}
        <button className="icon icon-destroy" onClick={() => onTaskDeleted(id)}>
          {' '}
        </button>{' '}
      </div>{' '}
      {/* 7. Поле ввода, которое появляется только в режиме редактирования */}{' '}
      {isEditing && (
        <input
          type="text"
          className="edit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleEditSubmit}
          autoFocus // Фокусируемся при открытии
        />
      )}{' '}
    </li>
  );
}

export default Task;
