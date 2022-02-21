import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import FormValidation from './components/FormValidation';
import FormWithFormik from './components/FormWithFormik';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetch("https://www.reddit.com/r/reactjs.json")
      return data.json();
    }

    const result = getData();
    setData(result);
  }, [])

  return (
    <div className="App">
      <FormWithFormik />
    </div>
  );
}

export default App;
