import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import './index.css';

// Начальные данные (как в твоем примере)
const initialTaskData = [
  {
    id: 1,
    label: 'Completed task',
    completed: true,
    dateCreated: new Date(Date.now() - 17000),
  },
  {
    id: 2,
    label: 'Editing task',
    completed: false,
    dateCreated: new Date(Date.now() - 300000),
  },
  {
    id: 3,
    label: 'Active task',
    completed: false,
    dateCreated: new Date(Date.now() - 5000),
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTaskData);
  const [filter, setFilter] = useState('all');

  // === ЛОГИКА ===

  // 1. Добавление (принимает текст из NewTaskForm)
  const addTask = (text) => {
    if (!text || !text.trim()) return;
    const newTask = {
      id: Date.now(), // Используем Date.now() для уникальности
      label: text,
      completed: false,
      dateCreated: new Date(),
    };
    setTasks([newTask, ...tasks]);
  };

  // 2. Переключение статуса (выполнено/нет)
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // 3. Редактирование
  const editTask = (id, newLabel) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, label: newLabel } : task,
      ),
    );
  };

  // 4. Удаление задачи
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // 5. Очистка всех выполненных
  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };

  // === ФИЛЬТРАЦИЯ И СЧЕТЧИК ===

  // Фильтруем список для отображения
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  // Счетчик ВСЕХ активных (невыполненных) задач
  const activeTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1> todos </h1> <NewTaskForm onTaskAdded={addTask} />{' '}
      </header>
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onTaskToggled={toggleTask}
          onTaskDeleted={deleteTask}
          onTaskEdited={editTask}
        />{' '}
        <Footer
          activeCount={activeTasksCount}
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
        />{' '}
      </section>{' '}
    </section>
  );
}

export default App;
