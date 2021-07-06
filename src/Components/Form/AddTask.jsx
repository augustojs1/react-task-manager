import React from 'react';
import styles from "./AddTask.module.css";
import FilterSection from '../TaskFilter/FilterSection';
import TaskList from '../TaskList/TaskList';
import useRender from '../../Hooks/useRender';

const AddTask = () => {
    const [form, setForm] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);
    const [render, setRender] = useRender();
    let task = {};

    const handleChange = ({ target }) => {
        setForm(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        task = {
            title: form,
            done: false,
        }

        setForm('');
        setTaskList([...taskList, task]);
        setRender([...taskList, task]);
    }

    return (
        <>
            <section className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.FormContainer}>
                    <input type="text" id="task" value={form} onChange={handleChange} />
                    <button>Add new task</button>
                </form>
            </section>
            <FilterSection taskList={taskList} setTaskList={setTaskList} render={render} setRender={setRender} />
            <TaskList render={render} setTaskList={setTaskList} setRender={setRender} />
        </>
    )
}

export default AddTask;
