import React from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "../src/App.css"
import Home from "./Home";  
import Display from "./display";
import Output from "./output";



function App() {
  // let navigate = useNavigate();
  // const handleClick = (location) => {
  //   console.log(location);
  //   navigate(location);
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/viewData" element={<Display />} />
          <Route path="/extractOCR" element={<Output />} />
      </Routes>
      </BrowserRouter>
   )
}

export default App;