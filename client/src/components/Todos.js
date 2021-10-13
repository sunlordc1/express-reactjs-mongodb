import React,{useState} from "react";
import TodoItem from "./TodoItem";
const Todos = ()=>{
    const [todoState,setTodosState] = useState([
        {   
            id:'todo1',
            title:'Việc 1',
            completed:false
        },
        {
            id:'todo2',
            title:'Việc 2',
            completed:true
        },
        {
            id:'todo3',
            title:'Việc 3',
            completed:false
        }
    ])
    // Check id để thay đổi trạng thái
    const markComplete = id =>{
        const newTodos = todoState.map(todo=>{
            if(todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodosState(newTodos)
    }
    // Khi sử dụng map trong react thì phải truyền props vào 1 cái key
    return (
        <>
            {todoState.map(todo=>{
                return (<TodoItem key={todo.id} todoProps={todo} markCompleteFunc={markComplete} />)
            })}
        </>
    )

    
}

export default Todos

