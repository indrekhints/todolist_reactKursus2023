import React, { useState } from "react";
import './App.css';
import { createElement } from 'react';
import { useEffect } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");


    const LisaTodo = () => {
        const todo = {
            id: Math.random(),
            todoText: newTodo,
            show: false,
            tehtud: false
        }
        setTodos([...todos, todo])
        setNewTodo("")
    }

    const kustutaTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }


    function muudaDisplay(id) {

        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.show = !todo.show
            }
            return todo
        })
        )
    }

    function muudaTodo(id) {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    todoText: newTodo,
                    show: false
                }
            } return todo


        }))
        setNewTodo("")
    }
    function tehtudDisplay(id) {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.tehtud = !todo.tehtud
            } console.log(todo)
            return todo
        })
        )
    }

    function time() {
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        return currentDateTime

    }


    return (
        <>
            <div>
                <div className="" >
                    <input className="input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                    <button className="button button5" onClick={LisaTodo} value="Lisa">+</button>
                </div>

                <ul className="tilesWrap">
                    {todos.map((todo, index) =>

                        <li key={index} >
                            <p className="tehtud" style={{ textColor: todo.tehtud ? "#b7b7b7" : "#4a8734" }}>{todo.todoText} </p>
                            <p id="number">{todos.indexOf(todo) + 1}</p>
                            <p id="aeg">Lisatud {time()}</p>
                            <button className="button1" onClick={() => kustutaTodo(todo.id)}>X</button>
                            <button className="button1" onClick={() => muudaDisplay(todo.id)}>Muuda</button>
                            <button className="button1" onClick={() => tehtudDisplay(todo.id)}>Tehtud</button>

                            <div style={{ display: todo.show ? "inline" : "none" }}>
                                <input className="peidetudInput"
                                    value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                                    style={{ display: todo.show ? "inline-block" : "none" }}
                                    type="text"
                                />
                                <button className="hiddenButton" onClick={() => muudaTodo(todo.id)}>OK</button>

                            </div>


                        </li>)}
                </ul>
            </div >
        </>
    );
};



export default TodoList;