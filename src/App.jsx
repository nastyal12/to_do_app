// src/App.jsx
import { useState } from 'react';

import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

import './index.css';

// Начальные данные
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

// Генератор ID
let nextId = 4;

function App() {
  const [tasks, setTasks] = useState(initialTaskData);
  const [filter, setFilter] = useState('all');

  // === CRUD-функции ===
  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: nextId++,
      label: text,
      completed: false,
      dateCreated: new Date(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      );
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // === Фильтрация и подсчёт ===
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  const activeTasks = tasks.filter((task) => !task.completed).length;

  return (
    <section className="todoapp">
      <NewTaskForm onTaskAdded={addTask} />{' '}
      <TaskList
        tasks={filteredTasks}
        onTaskToggled={toggleTask}
        onTaskDeleted={deleteTask}
      />{' '}
      <Footer
        activeCount={activeTasks}
        filter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      />{' '}
    </section>
  );
}

export default App;
