import { useEffect, useState,useCallback } from "react";
import { NewTodoForm } from "./NewToDoForm";
import "./styles.css"
import { ToDoList } from "./TodoList";




export default function App(){
const[todos,setTodos]=useState(()=>{
const localValue = localStorage.getItem("ITEMS")
if (localValue == null) return[]

return JSON.parse(localValue)
})

useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
},[todos])

const addTodo = useCallback((title) => {
  setTodos(currentTodos => {
    return [
      ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
    ]
  })
}, [setTodos])


const toggleTodo = useCallback((id, completed) => {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return { ...todo, completed}
      }

      return todo
    })
  })
},[setTodos])

const deleteTodo = useCallback((id) => {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
},[setTodos])

return (
  <>
  <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} 
  deleteTodo={deleteTodo}/>
  </>
)

}
