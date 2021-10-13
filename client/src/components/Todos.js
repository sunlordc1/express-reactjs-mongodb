import React,{useState} from "react";
import AddTodo from "./AddTodo";
import TodoHeader from "./TodoHeader";
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
    // Filter ra 1 array mới
    const deleteTodo = id=>{
        const newTodos = todoState.filter(todo=>todo.id != id)
        setTodosState(newTodos)
    }
    const addTodo = title =>{
        const newTodos = [...todoState,{
            title:title,
            id:todoState[todoState.length-1]?todoState[todoState.length-1]+'1':'todo1',
            completed:false
        }]
        setTodosState(newTodos)
    }
    // Khi sử dụng map trong react thì phải truyền props vào 1 cái key
    return (
        <>
            <TodoHeader/>
            <AddTodo addTodoFunc={addTodo}/>
            {todoState.map(todo=>{
                return (<TodoItem key={todo.id} todoProps={todo} markCompleteFunc={markComplete}  deleteTodoFunc={deleteTodo} />)
            })}
        </>
    )

    
}

export default Todos

