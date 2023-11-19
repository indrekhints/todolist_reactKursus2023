import React, { useState } from "react";
import './App.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    //onClick = {() => props.raamatuAndmed(props.id)



    const LisaTodo = () => {
        const todo = {
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
            todoName: newTodo,
        }
        setTodos([...todos, todo])
    }


    const kustutaTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const checkbox_Checking = (index) => {
        const newTodos = [...todos]
        newTodos[index].checked = !newTodos[index].checked;
        setTodos(newTodos);
        //todos.style.backgroundColor = "red";
    }

    function time() {
        let day = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        let hours = new Date().getHours()
        let minutes = new Date().getMinutes()

        return (
            day + "." + month + "." + year + "." + "   kell  " + hours + " : " + minutes
        )

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

                        <li key={index}>
                            <span id="span">{todo.todoName}</span>

                            <input ID="check" type="checkbox" checked={todo.checked} onChange={() => checkbox_Checking(index)} />
                            <span id="number">{todos.indexOf(todo) + 1}</span>
                            <span id="aeg">Lisatud {time()}</span>

                            <button className="button1" onClick={() => kustutaTodo(todo.id)}>X</button>
                            <button className="button1">muuda</button>

                        </li>)}
                </ul>
            </div >
        </>
    );
};



export default TodoList;