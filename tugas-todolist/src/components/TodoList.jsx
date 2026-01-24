import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
    this.todoId = 1;
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.input.trim() === "") return;

    const newTodo = {
      id: this.todoId++,
      text: this.state.input,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      input: "",
    }));
  };

  toggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  render() {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-slate-800 rounded-xl border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Todo List
        </h1>

        <form className="flex gap-2 mb-6" onSubmit={this.addTodo}>
          <input
            type="text"
            className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
            value={this.state.input}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a task"
          />
          <button
            className="px-6 py-2 bg-amber-400 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            type="submit"
          >
            Add
          </button>
        </form>

        <div className="space-y-3">
          {this.state.todos.length > 0 ? (
            this.state.todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={this.toggleComplete}
                removeTodo={this.removeTodo}
              />
            ))
          ) : (
            <div className="p-4 bg-slate-700/50 border border-dashed border-slate-600 rounded-lg text-center">
              <p className="text-slate-400 font-medium text-sm">
                No Todo available
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
