import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, onChange }) => {
    return <button onChange={onChange} className={styles.filterButton}>{title}</button>
}

export default Button;
