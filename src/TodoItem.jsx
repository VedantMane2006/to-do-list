export function TodoItem ({completed, id, title, toggleTodo, deleteTodo}) {
    return (
        <li className="flex justify-between items-center w-full p-3 bg-white shadow rounded">
                <label className="flex items-center space-x-2">
                    <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    />
                    <span className={completed ? "line-through text-gray-500" : ""}>
                    {title}
                    </span>
                </label>
                <button
                    className="text-red-600 hover:text-red-800 font-medium"
                    onClick={() => deleteTodo(id)}
                >
                    Delete
                </button>
                </li>
    )
}