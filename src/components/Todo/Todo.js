import React from 'react';
import './Todo.css'

const Todo = (props) => {
    const { title, description } = props.todo;
    const { id } = props

    const handleClick = (id) => {
        props.onRemoveTodo(id);
    }

    return (
        <article className='todo'>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div>
                <button className='btn' onClick={() => { handleClick(id) }}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </article>
    );
};

export default Todo;