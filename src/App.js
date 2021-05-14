import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos,setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = 'todoApp.todos'
  const todoRef = useRef()

  useEffect(() =>{
     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
     if (storedTodos) setTodos(storedTodos)
  },[])
  useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

 function toggleTodo(id){
   const newtodos = [...todos]
   const todo = newtodos.find(todo => todo.id === id)
   todo.completed = !todo.completed
   setTodos(newtodos)
 }


  function addTodoList(e){
      const task = todoRef.current.value
      if (task === '') return
      setTodos(updateTodos => {
        return [...updateTodos, {id: uuidv4(), name: task, completed: false}]
      })
      todoRef.current.value = null
  }

function handleClearTodos(){
  const newTodos = todos.filter(todo => !todo.completed)
  setTodos(newTodos)
}

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input type="text" ref={todoRef} />
      <button onClick={addTodoList}>Add Todo</button>
      <p><button onClick={handleClearTodos}>Clear Completed work</button></p>
      <div>{todos.filter(todo => !todo.completed).length}left to do</div>
    </>

  )
}

export default App;
