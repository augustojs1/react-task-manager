import React from 'react';
import Tasks from './Tasks';

const TaskList = ({ task }) => {
    return (
        <section>
            <ul>
                <Tasks title={task} />
            </ul>
        </section>
    )
}

export default TaskList;
