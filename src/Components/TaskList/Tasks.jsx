import React from 'react';
import styles from './Tasks.module.css';

const Tasks = ({ title }) => {
    return <li className={styles.taskItem}>
        <p>{title}</p>
        <span>
            <button>Check</button>
            <button>Edit</button>
            <button>Delete</button>
        </span>
    </li>;   
}

export default Tasks;
