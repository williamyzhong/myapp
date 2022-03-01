
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const[showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'School',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Idk',
      day: 'Feb 17th at 2:10pm',
      reminder: false
    }
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: <h2>No tasks to show</h2>}
    </div>
  );
}

export default App;
