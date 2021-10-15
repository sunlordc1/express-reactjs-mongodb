import React, { useState } from "react";
import PropTypes from 'prop-types'
const AddTodo = props =>{
    const addTodo = props.addTodoFunc;
    const [title,setTitleState] = useState('')
    const changeTitle = event =>{
        setTitleState(event.target.value)
    }
    const addSingleTodo = event =>{
        event.preventDefault();
        if(title !== ''){
            addTodo(title);
            setTitleState('')
        }
    }
    return (
        <>
        <form className="form-inline" onSubmit={addSingleTodo}>
        <div className="form-group">
                <input type="text" name="title" aria-describedby="addTodo" className="form-control float-left" placeholder="Thêm việc" style={{maxWidth:'70%'}} onChange={changeTitle} value={title} />
                <button type="submit" className="btn btn-primary " style={{maxWidth:'30%'}}>Thêm </button>
        </div>
        </form>

           
        </>
    )
}
AddTodo.propTypes = {
    addTodoFunc:PropTypes.func.isRequired,
    
}
export default AddTodo