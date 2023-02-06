import "./App.css";
import Google from "./Component/Google/Google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Google />} ></Route>
          <Route exact path="/about" element ={<About/>}></Route>
          <Route exact path='/contact' element ={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
