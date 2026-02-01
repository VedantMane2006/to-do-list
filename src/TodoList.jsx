import { TodoItem } from "./TodoItem"

export function TodoList ({todos, toggleTodo, deleteTodo}) {
    return (
    <ul className="flex flex-col items-center space-y-3 max-w-md mx-auto mt-8">
        {todos.length === 0 && (
            <div className="text-white font-semibold">Todos list is empty!</div>
        )}
        {todos.map(todo => {
            return (
                <TodoItem 
                    {...todo} 
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo}
                />
            )
        })}
    </ul>
    )
}