import React from 'react';
import Tasks from './Tasks';

const TaskList = ({ taskList, setTaskList }) => {
    return (
        <section>
            <ul>
                {taskList && taskList.map((task, index) => (
                    <Tasks key={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                ))}
            </ul>
        </section>
    )
}

export default TaskList;
