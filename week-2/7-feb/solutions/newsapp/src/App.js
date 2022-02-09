import Header from "./components/Header";
import NewsList from "./components/NewsList";
import newsjson from "./news.json";

function App() {
  return (
    <div>
      <Header />

      <NewsList data={newsjson} />
    </div>
  );
}

export default App;
