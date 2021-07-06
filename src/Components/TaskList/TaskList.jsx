import React from 'react';
import Tasks from './Tasks';
import TaskActions from '../TaskActions/TaskActions';

const TaskList = ({ render, setTaskList, setRender }) => {

    return (
        <>
            <section>
                <ul>
                    {render && render.map((task, index) => (
                        <Tasks key={index} task={task} render={render} setTaskList={setTaskList} setRender={setRender} />
                    ))}
                </ul>
            </section>
            <TaskActions />
        </>
    )
}

export default TaskList;
