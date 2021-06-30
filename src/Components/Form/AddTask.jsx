import React from 'react';
import styles from "./AddTask.module.css";
import Tasks from '../TaskFilter/Tasks';

const AddTask = () => {
    const [form, setForm] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);
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
    }

    console.log(taskList);

    return (
        <>
            <section className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.FormContainer}>
                    <input type="text" id="task" value={form} onChange={handleChange} />
                    <button>Add new task</button>
                </form>
            </section>
            {taskList.map((task, index) => (
                <Tasks key={index} title={task.title} />
            ))}
        </>
    )
}

export default AddTask;
