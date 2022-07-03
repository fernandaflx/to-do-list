import React, { useState } from 'react';
import Card from './components/Card';
import './styles/App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [addTasks, setAddTasks] = useState([]);

  function handleAddNewTask(){
    const newTask = {
      task: todo,
      time: new Date().toLocaleTimeString("pt-br")
    }

    setAddTasks(prevState => [...prevState, newTask])

  };
  
  return (
    <div className="container">
      <header><h1>TODOLIST</h1></header>
      <input
        className="task-input"
        type="text"
        placeholder="Insert a new task..."
        onChange={e => setTodo(e.target.value)} />

      <button className="add-button" onClick={handleAddNewTask}>Add New Task</button>

      {addTasks.map(task => <Card task={task.task} key={task.time} /> ) }
    </div>
  )
}

export default App
