import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import "./index.css"
import { TodoList } from './TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => { 
      return [ 
          ...currentTodos, 
          { id: crypto.randomUUID(), title, completed: false} 
      ] 
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed } : todo
      )
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-800 to-purple-500">
        <div className="pt-10">
          <div className="p-6 max-w-md mx-auto bg-blue-600 rounded-md text-center font-mono font-extrabold text-white text-3xl shadow-md">
            To-do list
          </div>
        </div>
        <NewTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
    </>
  )
}

export default App
