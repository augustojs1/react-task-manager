import React from 'react';
import Button from '../Button';
import styles from './FilterSection.module.css';

const FilterSection = () => {
    return (
        <section className={styles.filterContainer}>
            <h1>Task List</h1>
            <div className={styles.filterButtonContainer}>
                <Button title="All" />
                <Button title="Completed" />
                <Button title="To be done" />
            </div>
        </section>
    )
}

export default FilterSection;
