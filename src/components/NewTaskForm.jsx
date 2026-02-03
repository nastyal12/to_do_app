import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTaskForm({ onTaskAdded }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const text = inputValue.trim();
      if (text) {
        onTaskAdded(text);
        setInputValue('');
      }
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

NewTaskForm.propTypes = {
  onTaskAdded: PropTypes.func.isRequired,
};

export default NewTaskForm;
