import React from 'react';
import Button from '../Button';
import styles from './FilterSection.module.css';

const FilterSection = ({ taskList, setTaskList }) => {
    const listAll = (e) => {
        
    }

    const listCompleted = (e) => {

    }

    const listToBeDone = (e) => {

    }


    return (
        <section className={styles.filterContainer}>
            <h1>Task List</h1>
            <div className={styles.filterButtonContainer}>
                <Button onChange={listAll} title="All" />
                <Button onChange={listCompleted} title="Completed" />
                <Button onChange={listToBeDone} title="To be done" />
            </div>
        </section>
    )
}

export default FilterSection;
