import todoReducer, { deleteTodo } from "../slices/todoSlices";

describe("Unit Test: Redux Todo Slice", () => {
  it("Harus bisa menghapus todo dari state", () => {
    const initialState = {
      items: [{ id: 10, title: "Tugas Udayana", completed: false }],
      status: "idle",
      error: null,
    };

    const action = { type: deleteTodo.fulfilled.type, payload: 10 };
    const result = todoReducer(initialState, action);

    expect(result.items).toHaveLength(0);
  });
});
