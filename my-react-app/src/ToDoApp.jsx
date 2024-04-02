import {useState} from 'react'
import './index.css'

function ToDoApp() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState()
    
    function addTask() {
        if(newTask.trim() != ''){
            setTasks([...tasks, newTask])
        }
        setNewTask('');
    } 

    function deleteTask(index) {
        const postDelete = tasks.filter((_, i) => index != i) 
        setTasks(postDelete) 
    }

    function moveUp(index) {
        if(index > 0) {
        const newTasks = [...tasks] ;
        [newTasks[index], newTasks[index-1]] = [newTasks[index-1], newTasks[index]] ;
        setTasks(newTasks);
        }
    }

    function moveDown(index) {
        if(index < tasks.length - 1) {
        const newTasks = [...tasks] ;
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]] ;
        setTasks(newTasks);
        }
    }

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }


    return(
        <>
            <div className='card'>
                <h2 style={{textAlign: 'center', fontFamily: 'monospace'}}>To Do List</h2>

                <span>
                <input type="text" value={newTask} onChange={(e) => handleInputChange(e)} className='custom-input' />
                <button class="check-btn" onClick={() => addTask()}>Add</button>
                </span>
                {tasks.map((task, index) => 

                <div class="task">
                <button class="check-btn" onClick={() => deleteTask(index)}>✅</button>
                <p class="task-text">{task}</p>
                <button class="up-btn" onClick={() => moveUp(index)}>⬆️</button>
                <button class="down-btn" onClick={() => moveDown(index)}>⬇️</button>
                </div>

                )}
                

            </div>
            
        </>
    );
}

export default ToDoApp