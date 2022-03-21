import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "./redux/apiSlice";

function App() {
  const todos = useSelector(state => state.todos)
  // const todos = useRecoilValue(todoState)
  const completedTodos = todos.filter(todo => todo.completed === true)

  // Test av RTK Query
  //const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu")
  //if (isLoading) return <div>Loading..</div>
  //console.log(data);

  return (
    <div>
      <AddTodoForm />
      <TodoList />
      <h4>Done: {completedTodos.length}</h4>
    </div>
  );
}

export default App;
