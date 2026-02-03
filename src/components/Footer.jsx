import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from './TasksFilter';

// Добавляем filter в список принимаемых аргументов 👇
function Footer({ activeCount, filter, onFilterChange, onClearCompleted }) {
  const itemText = activeCount === 1 ? 'item' : 'items';

  return (
    <footer className="footer">
      <span className="todo-count">
        {' '}
        {activeCount} {itemText}
        left{' '}
      </span>
      {/* Теперь эта переменная определена и передается дальше */}{' '}
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed{' '}
      </button>{' '}
    </footer>
  );
}

// Проверка типов (обязательно по заданию)
Footer.propTypes = {
  activeCount: PropTypes.number,
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

// Значения по умолчанию
Footer.defaultProps = {
  activeCount: 0,
  filter: 'all',
};

export default Footer;
