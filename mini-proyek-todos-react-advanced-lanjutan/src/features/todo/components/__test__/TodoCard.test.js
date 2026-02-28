/** @jest-environment jsdom */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoCard from "../TodoCard";
import { DarkModeProvider } from "../../../../context/DarkModeContext";

describe("Unit Test: Komponen TodoCard", () => {
  const mockTodo = {
    id: 1,
    title: "Belajar Testing di Udayana",
    completed: false,
  };

  it("Harus menampilkan judul tugas dengan benar", () => {
    render(
      <DarkModeProvider>
        <TodoCard id={1} text="Belajar Testing di Udayana" status={false} />
      </DarkModeProvider>,
    );

    const todoTitle = screen.getByText(/Belajar Testing di Udayana/i);
    expect(todoTitle).toBeInTheDocument();
  });
});
