import { useEffect, useState,useCallback } from "react";
import { NewToDoForm } from "./NewToDoForm";
import "./styles.css"
import { ToDoList } from "./TodoList";
import { todo } from "./TodoItem";




export default function App(){
const[todos,setTodos]=useState(()=>{
const localValue = localStorage.getItem("ITEMS")
if (localValue == null) return[]

return JSON.parse(localValue)
})

useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
},[todos])

const addTodo = useCallback((title : string) => {
  setTodos((currentTodos : string[]) => {
    return [
      ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
    ]
  })
}, [setTodos])


const toggleTodo = useCallback((id : number , completed :boolean | undefined) => {
  setTodos((currentTodos: todo[]) => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return { ...todo, completed}
      }

      return todo
    })
  })
},[setTodos])

const deleteTodo = useCallback((id : number) => {
  setTodos((currentTodos: todo[]) => {
    return currentTodos.filter(todo => todo.id !== id)
  })
},[setTodos])

return (
  <>
  <NewToDoForm onSubmit={addTodo}/>
  <h1 className="header">Todo List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
)

}
