import React from 'react';
import PropTypes from 'prop-types';

function TasksFilter({ filter, onFilterChange }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={filter === 'all' ? 'selected' : ''}
          onClick={() => onFilterChange('all')}
        >
          All{' '}
        </button>{' '}
      </li>{' '}
      <li>
        <button
          className={filter === 'active' ? 'selected' : ''}
          onClick={() => onFilterChange('active')}
        >
          Active{' '}
        </button>{' '}
      </li>{' '}
      <li>
        <button
          className={filter === 'completed' ? 'selected' : ''}
          onClick={() => onFilterChange('completed')}
        >
          Completed{' '}
        </button>{' '}
      </li>{' '}
    </ul>
  );
}

// Проверка типов (обязательно по заданию)
TasksFilter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};

// Значение по умолчанию
TasksFilter.defaultProps = {
  filter: 'all',
};

export default TasksFilter;
