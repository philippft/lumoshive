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
  console.log(response.data);
  return response.data;
})

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
  },
});

export default todoSlice.reducer;
