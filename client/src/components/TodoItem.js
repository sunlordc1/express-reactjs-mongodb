import React from "react";
import PropTypes from 'prop-types';
const TodoItem = props =>{
    const todo = props.todoProps
    const markComplete = props.markCompleteFunc;
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
            
            <label style={todoItemStyle} ><input type="checkbox" onChange={markComplete.bind(this,todo.id)} checked={todo.completed}/> {todo.title}</label>
            <button  className="btn btn-danger" style={buttonStyle}>Xóa</button>
        </div>

    )
}
//Phải có todoProp này thì component này mới hoạt động bthg ( check isRequired)

TodoItem.propTypes = {
    todoProps:PropTypes.object.isRequired,
    markCompleteFunc:PropTypes.func.isRequired
}
export default TodoItem