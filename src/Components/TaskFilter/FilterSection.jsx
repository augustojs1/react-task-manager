import React from 'react';
import Button from '../Button';
import styles from './FilterSection.module.css';

const FilterSection = ({ taskList, setTaskList, render, setRender }) => {
    
    const listAll = (e) => {
        setRender(taskList);
        console.log(taskList);
    }

    const listCompleted = (e) => {
        const completedTasks = taskList.filter((task) => task.done !== false);
        setRender(completedTasks);
        console.log(completedTasks);
    }

    const listToBeDone = (e) => {
        const todoTasks = taskList.filter((task) => task.done === false);
        setRender(todoTasks);
        console.log(todoTasks);
    }

    return (
        <section className={styles.filterContainer}>
            <h1>Task List</h1>
            <div className={styles.filterButtonContainer}>
                <Button onClick={listAll} title="All" />
                <Button onClick={listCompleted} title="Completed" />
                <Button onClick={listToBeDone} title="To be done" />
            </div>
        </section>
    )
}

export default FilterSection;
