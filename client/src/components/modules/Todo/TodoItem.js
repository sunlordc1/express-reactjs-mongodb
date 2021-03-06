import React from "react";
import PropTypes from 'prop-types';
const TodoItem = props =>{
    const todo = props.todoProps
    const markComplete = props.markCompleteFunc;
    const deleteTodo = props.deleteTodoFunc;
    // Viết dạng style của javascript khi tác động lên element
    const todoItemStyle = {
         textDecoration:todo.completed?'line-through':'none'
    }
    const buttonStyle = {
        marginLeft:'15px'
    }

//Gắn listener cho input
    return (
        <div className="checkbox mb-3" style={{background:'#f4f4f4'}}>
            <label style={todoItemStyle} ><input type="checkbox" onChange={markComplete.bind(this,todo._id)} checked={todo.completed}/> {todo.title}</label>
            <button  className="btn btn-danger" style={buttonStyle} onClick={deleteTodo.bind(this,todo._id)}>Xóa</button>
        </div>
    )
}
//Phải có todoProp này thì component này mới hoạt động bthg ( check isRequired)

TodoItem.propTypes = {
    todoProps:PropTypes.object.isRequired,
    markCompleteFunc:PropTypes.func.isRequired,
    deleteTodoFunc:PropTypes.func.isRequired
}
export default TodoItem