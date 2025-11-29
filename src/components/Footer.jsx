// ⚠️ Принимаем все пропсы, включая новые функции и состояние фильтра
function Footer({ activeCount, filter, onFilterChange, onClearCompleted }) {
  const itemText = activeCount === 1 ? 'item' : 'items';

  // ⚠️ Создаем кнопки фильтра
  const filterButtons = ['All', 'Active', 'Completed'].map((name) => {
    const isSelected = name.toLowerCase() === filter;
    return (
      <li key={name}>
        <button
          className={isSelected ? 'selected' : ''}
          onClick={() => onFilterChange(name.toLowerCase())}
        >
          {name}{' '}
        </button>{' '}
      </li>
    );
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        {' '}
        {activeCount} {itemText}
        left{' '}
      </span>{' '}
      <ul className="filters"> {filterButtons} </ul>{' '}
      {/* ⚠️ Кнопка очистки завершенных */}{' '}
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed{' '}
      </button>{' '}
    </footer>
  );
}

export default Footer;
