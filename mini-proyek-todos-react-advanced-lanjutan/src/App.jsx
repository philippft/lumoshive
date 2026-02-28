import "./App.css";
import TodoListPage from "./features/todo/Page/TodoListPage";
import Layout from "./shared/layouts/Layout";

function App() {
  return (
    <Layout>
      <TodoListPage />
    </Layout>
  );
}

export default App;
