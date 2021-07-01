import React from 'react';
import Tasks from './Tasks';

const TaskList = ({ tasks }) => {
    return (
        <section>
            <ul>
                {tasks && tasks.map((task) => (
                    <Tasks key={task.title} title={task.title} />
                ))}
            </ul>
        </section>
    )
}

export default TaskList;
