import React, { useState } from 'react'

function Todoform(props) {
    const [input, setInput] = useState('');
    
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor( Math.random() * 10000 ),
            text: input
        });
        
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" placeholder="Add an item" value={input} name="text" className="todo-input" onChange={handleChange}/>
                <button className="todo-button">Add todo item</button>
            </form>            
        </div>
    )
}

export default Todoform
