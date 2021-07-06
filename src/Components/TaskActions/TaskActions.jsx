import React from 'react';
import styles from './TaskActions.module.css';

const TaskActions = ({ setTaskList, render, setRender }) => {
    const deleteDoneTasks = () => {
        const updatedRender = render.filter((task) => task.done === false);
        setRender([...updatedRender]);
        setTaskList([...updatedRender]);
        
        console.log(updatedRender);
    }

    const deleteAllTasks = () => {
        render = [];
        setRender(...render);
        setTaskList([...render]);

    }

    return (
        <section className={styles.taskActionsContainer}>
            <button onClick={deleteDoneTasks}>Delete done tasks</button>
            <button onClick={deleteAllTasks}>Delete all tasks</button>
        </section>
    )
}

export default TaskActions;


