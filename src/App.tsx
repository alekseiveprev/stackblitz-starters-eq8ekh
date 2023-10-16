import { FC, useState } from 'react';
import { v1 } from 'uuid';

import './style.css';
import { Todolist } from './Todolist';

export const App: FC<{ name: string }> = ({ name }) => {
  let [tasks, setTasks] = useState([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Hello world', isDone: true },
    { id: v1(), title: 'I am Happy', isDone: false },
    { id: v1(), title: 'Yo', isDone: false },
  ]);

  function removeTask(id: string) {
    let newRemoveTask = tasks.filter((t) => t.id !== id);
    setTasks(newRemoveTask);
  }

  let newFilteredTasks = tasks;

  let [filter, setFilter] = useState('All');

  const filterTasks = (value: string) => {
    if (value === 'Active') {
      let filterTask = newFilteredTasks.filter((t) => t.isDone === false);
    }
    if (value === 'Completed') {
      let filterTask = newFilteredTasks.filter((t) => t.isDone === true);
    }
  };

  return (
    <div className="App">
      <Todolist
        title={'What to learn'}
        tasks={newFilteredTasks}
        removeTask={removeTask}
        filterTask={filterTask}
      />
    </div>
  );
};
