import React, { useState, useEffect, useRef } from 'react'

function Todoform(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    
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
            <form onSubmit={handleSubmit} className="w-50 py-5 mx-auto">
                <div className="form-group">
                    {props.edit ? (
                    <>
                    <input type="text" placeholder="Update" value={input} name="text" className="form-control" onChange={handleChange} ref={inputRef} />
                    <button className="btn btn-primary btn-lg w-100 update-form">Update</button>
                    </>
                    ) : (
                    <>   
                    <input type="text" placeholder="Add Todo Item" value={input} name="text" className="form-control" onChange={handleChange} ref={inputRef} />
                    <button className="btn btn-primary btn-lg w-100 add-form">Add Todo Item</button>
                    </>
                    )             
                    }  
                </div>                  
            </form>
    )
}

export default Todoform
