import React, { useState } from 'react'
import Todo from './Todo';
import Todoform from './Todoform'
import { GrDocumentTxt } from 'react-icons/gr'
import { Container, Row } from 'react-bootstrap';

function Todolist() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };    

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };    

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id)

        setTodos(removeArr)
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    const style = { color: "pink", fontSize: "1.2em", margin: "20px" }

    return (
        <div className="py-5 text-center app-bg">
            <h1 className="text-dark">Whats is your plan for today?</h1>
            <Todoform onSubmit={addTodo} />
            <Container>
                <Row >
                    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
                </Row>
            </Container>
        </div>
    )
}

export default Todolist
