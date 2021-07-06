import React from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ task, render, setTaskList, setRender }) => {
    let newTaskList;
    const [done, setDone] = React.useState(false);


    const handleCheck = ({ target }) => {
        const { title } = task;

        setDone(target.checked);

        const taskIndex = render.findIndex((task) => task.title === title);

        render[taskIndex].done = target.checked;
    }

    const handleDelete = (e) => {
        const { title } = task;

        newTaskList = render.filter((task) => task.title !== title);
        
        setTaskList([...newTaskList]);
        setRender([...newTaskList]);
    }

    return <li className={styles.taskItem}>
        {task.done === true ? <p className={styles.completedTask}>{task.title}</p> : <p>{task.title}</p>}
        <span>
            <input type="checkbox" checked={task.done} onChange={handleCheck} />
            <button className={styles.deleteButton} onClick={handleDelete}></button>
        </span>
    </li>;   
}

export default Tasks;
