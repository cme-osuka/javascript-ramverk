import { useRecoilState } from "recoil";
import { todoState } from "../recoil/todo/atom";

function useTodos() {
  const [todos, setTodos] = useRecoilState(todoState);

  function addTodo(title) {
    const id = Math.random().toString(32);
    setTodos([
      ...todos,
      { id: id, title: title, completed: false }
    ])
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id));
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(t => t.id === id ? 
        { ...t, completed: !t.completed } :
        t)
    );
  }

  return { todos, addTodo, deleteTodo, toggleTodo }
}

export default useTodos