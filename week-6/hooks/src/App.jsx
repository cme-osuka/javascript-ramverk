import "./App.css";
import useApi from "./hooks/useApi";
import useTodos from "./hooks/useTodos";
import useDate from "./hooks/useDate";
import useForm from "./hooks/useForm";

function App() {
  const { formData, handleInputChange, handleSubmit } = useForm({
    username: "",
    password: "",
  }, (data) => { console.log(data) });

  return (
    <div className="App">
      <header className="App-header">

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            type="text"
            onChange={handleInputChange}
            value={formData.username}
          />
          <input
            name="password"
            type="password"
            onChange={handleInputChange}
            value={formData.password}
          />
          <button type="submit">Submit</button>
        </form>

      </header>
    </div>
  );
}

export default App;
