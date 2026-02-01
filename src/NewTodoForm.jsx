import { useState } from "react"

export function NewTodoForm ({ onSubmit }){
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()

        if (newItem.trim() === "") return

        onSubmit(newItem)

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md space-y-4 mt-6">
        <div className="flex flex-col">
          <label htmlFor="item" className="mb-1 text-gray-700 font-medium">New Item</label>
          <input
            type="text"
            id="item"
            placeholder="Type here..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    )
}