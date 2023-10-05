import React, { useState } from 'react';

import {v4 as uuidv4} from "uuid"
import Todos from '../Todos/Todos';
import './Home.css'
import NewTodo from '../NewTodo/NewTodo';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const addTodos = (todo) => {
        // console.log(todo);
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(), todo}]
        });
        // console.log(todos);
    }

    const removeTodo = (id) => {
        // alert(id);
        setTodos((prevTodos) => {
            const filteredTodos = todos.filter((todo) => todo.id !== id);
            return filteredTodos;
        })
    }

    return (
        <div className='container'>
            <h1>Todo App</h1>
            <NewTodo onAddTodos={addTodos}></NewTodo>
            <Todos todos={todos} onRemoveTodo={removeTodo}></Todos>
        </div>
    );
};

export default Home;