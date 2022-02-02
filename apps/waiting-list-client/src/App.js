import NameRegistration from "./components/NameRegistration";
import List from "./components/List";
import "./App.css";


function App() {
  const waitinglist = ["oscar", "bob"];

  function handleClick() {
    console.log("Click från App");
  }

  return (
    <div>
      <NameRegistration
        placeholder="Ditt namn från App"
        handleClick={handleClick}
      />
      <List data={waitinglist} />
    </div>
  );
}

export default App;
