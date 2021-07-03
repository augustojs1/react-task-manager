import React from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ task, taskList, setTaskList }) => {
    let newTaskList;
    const [done, setDone] = React.useState(false);


    const handleCheck = ({ target }) => {
        const { title } = task;

        setDone(target.checked);

        const taskIndex = taskList.findIndex((task) => task.title === title);

        taskList[taskIndex].done = target.checked;
    }

    const handleEdit = (e) => {
        console.log(`editing ${task.title}`);
        
    }

    const handleDelete = (e) => {
        const { title } = task;

        newTaskList = taskList.filter((task) => task.title !== title);
        
        setTaskList([...newTaskList]);
    }

    return <li className={styles.taskItem}>
        {done === true ? <p className={styles.completedTask}>{task.title}</p> : <p>{task.title}</p>}
        <span>
            <input type="checkbox" value={done} checked={done} onChange={handleCheck} />
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </span>
    </li>;   
}

export default Tasks;
