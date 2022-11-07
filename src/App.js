import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LazyLoad/Landing";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
// import {fetchApi} from "./API";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const result = [];
      for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const response = await (await fetch(url)).json();
        result.push(response);
      }
      setData(result)
      return result;
    }
    fetchApi();

  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home array={data}/>} />
        <Route path="/lazy" element={<Landing array={data}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
