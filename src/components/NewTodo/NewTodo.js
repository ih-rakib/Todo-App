import React, { useState } from 'react';
import './NewTodo.css'

const NewTodo = (props) => {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    })
    const {title, description} = todo;

    const handleChange = (e) => {
        const name = e.target.name;
        setTodo((prevTodo) => {
            return {...prevTodo, [name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodos(todo);
        setTodo({
            title: '',
            description: ''
        })
    }    

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-field'>
                <label htmlFor="title">Task : </label>
                <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
            </div>
            <div className='form-field'>
                <label htmlFor="description">Description : </label>
                <textarea type="text" name="description" id="description" value={description} onChange={handleChange}/>
            </div>
            <button type="submit" disabled={!title ? true:false}>Add Task</button>
        </form>
    );
};

export default NewTodo;