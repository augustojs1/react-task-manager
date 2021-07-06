import React from 'react';
import styles from './TaskActions.module.css';

const TaskActions = () => {
    return (
        <section className={styles.taskActionsContainer}>
            <button>Delete done tasks</button>
            <button>Delete all tasks</button>
        </section>
    )
}

export default TaskActions;


