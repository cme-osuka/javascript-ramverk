import "./App.css";
import MyComponent from "./components/MyComponent";
import { useColorMode } from "./providers/ColorMode";
import { useLanguage } from "./providers/Language";

function App() {
  const { language, setLanguage, t } = useLanguage();
  const { current, toggle } = useColorMode();


  return (
    <div className={current === "light" ? "Light" : "Dark"}>
      <header className="App-header">
        <MyComponent />
        <button
          onClick={() => {
            if (language === "danish") {
              setLanguage("english");
            }
            if (language === "english") {
              setLanguage("swedish");
            }
            if (language === "swedish") {
              setLanguage("danish");
            }
          }}
        >
          {t[language].change_language}
        </button>
        <button onClick={toggle}>
          Byt colorMode
        </button>

        {/*<LanguageContext.Consumer>
          {(value) => {
            return <div>{value.language}</div>;
          }}
        </LanguageContext.Consumer>*/}
      </header>
    </div>
  );
}

export default App;
