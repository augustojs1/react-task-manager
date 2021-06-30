import React from 'react';
import styles from "./AddTask.module.css";

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
        <div>
            <form onSubmit={handleSubmit} className={styles.FormContainer}>
                <label htmlFor="">Task:</label>
                <input type="text" id="task" value={form} onChange={handleChange} />
                <button>Add new task</button>
            </form>
        </div>
    )
}

export default AddTask;