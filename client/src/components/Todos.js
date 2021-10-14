import React,{useState,useEffect} from "react";
import AddTodo from "./AddTodo";
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import axios from 'axios'
const Todos = ()=>{
    // const [todoState,setTodosState] = useState([
    //     {   
    //         id:'todo1',
    //         title:'Việc 1',
    //         completed:false
    //     },
    //     {
    //         id:'todo2',
    //         title:'Việc 2',
    //         completed:true
    //     },
    //     {
    //         id:'todo3',
    //         title:'Việc 3',
    //         completed:false
    //     }
    // ])
    const [todoState,setTodosState] = useState([])
    useEffect(()=>{
        const getTodos = async ()=>{
            try{
                const res = await axios.get(
                    'http://localhost:3000/user'
                )
                console.log(res.data)
            }catch(error){
                console.log(error.message)
            }
        }
        getTodos()
    })
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

