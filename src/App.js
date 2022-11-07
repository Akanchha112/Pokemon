import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LazyLoad/Landing";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchApi() {
      const result = [];
      for (let i = 1; i <= 100; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        const response = await (await fetch(url)).json();
        result.push(response);
      }
      setData(result)
      setLoading(false);
      return result;
    }
    fetchApi();
    
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home array={data} loading={loading}/>} />
        <Route path="/lazy" element={<Landing array={data} waitloading={loading}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
