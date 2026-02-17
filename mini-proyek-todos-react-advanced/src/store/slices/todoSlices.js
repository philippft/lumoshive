import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchAllTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axiosInstance.get();
  return response.data;
});

export const addTodos = createAsyncThunk("todos/addTodos", async (todo) => {
  const response = await axiosInstance.post("", {
    title: todo,
    completed: false,
    userId: 1,
  });
  // console.log(response.data);
  return response.data;
})

export const updateTodo = createAsyncThunk("todos/updateTodo", 
  async ({id, status}) => {
    const newStatus = !status
    const response = await axiosInstance.put(`/${id}`, {
      completed: newStatus,
    });
    console.log("Berhasil di update: ", response.data);
    return { id, completed: newStatus };
  }
)

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.items.unshift(action.payload); 
      })
      .addCase(updateTodo.fulfilled, (state, action) =>{
        const index = state.items.findIndex((item) => item.id === action.payload.id);

        if(index !== -1) {
          state.items[index].completed = action.payload.completed
        }
      })
  },
});

export default todoSlice.reducer;
