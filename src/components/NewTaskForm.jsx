// src/components/NewTaskForm.jsx
import React, { useState } from 'react';

function NewTaskForm({ onTaskAdded }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // 👈 важно!

      if (!inputValue.trim()) return; // 👈 защита от пустых строк

      onTaskAdded(inputValue);
      setInputValue('');
    }
  };

  return (
    <header className="header">
      <h1> todos </h1>{' '}
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSubmit}
      />{' '}
    </header>
  );
}

export default NewTaskForm;
