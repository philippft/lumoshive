import React from "react";

export default function TodoItem({ todo, toggleComplete, removeTodo }) {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-3 rounded-lg border transition-all duration-200 ${
        todo.completed
          ? "bg-slate-700/30 border-slate-700 opacity-60"
          : "bg-slate-700 border-slate-600 hover:border-slate-500 shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">
          #{todo.id}
        </span>

        <p
          className={`text-white truncate transition-all duration-300 ${
            todo.completed ? "line-through text-slate-500" : ""
          }`}
        >
          {todo.text}
        </p>
      </div>

      <div className="flex gap-2 shrink-0 ml-4">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`px-3 py-1 text-xs font-medium rounded-md border transition-colors ${
            todo.completed
              ? "bg-green-500/10 border-green-500/50 text-green-400 hover:bg-green-500/20"
              : "border-blue-500/50 text-blue-400 hover:bg-blue-500 hover:text-white"
          }`}
        >
          {todo.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => removeTodo(todo.id)}
          className="px-3 py-1 text-xs font-medium border border-red-500/50 text-red-400 rounded-md hover:bg-red-500 hover:text-white transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
