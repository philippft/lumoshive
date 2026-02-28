import { useEffect} from "react";
import { addTodos, deleteTodo, fetchAllTodos, updateTodo } from "../../../store/slices/todoSlices";
import { useDispatch, useSelector } from "react-redux";

export const useTodo = () => {
    const dispatch = useDispatch();

    const { items, status, error } = useSelector((state) => state.todos);

    useEffect(() => {
      if (status === "idle") {
        dispatch(fetchAllTodos());
      }
    }, [status, dispatch]);

    return {
        items,
        status: status === "loading",
        error,
        addTodo: (todo) => dispatch(addTodos(todo)),
        updateTodo: (id, status) => dispatch(updateTodo(id, status)),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
} 


