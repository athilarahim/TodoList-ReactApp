import React, {useState, useRef} from 'react';
import TodoList from './TodoList'

function App() {
  const [todos,setTodos] = useState([]);
  const todoRef = useRef()
  function addTodoList(e){
      const task = todoRef.current.value
      if (task === '') return
      console.log(task)
      todoRef.current.value = null
  }
  return (
    <>
      <TodoList todos={todos}/>
      <input type="text" ref={todoRef} />
      <button onClick={addTodoList}>Add Todo</button>
      <button>Clear Todos</button>
    </>

  )
}

export default App;
