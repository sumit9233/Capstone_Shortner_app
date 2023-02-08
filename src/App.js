import "./App.css";
import Google from "./Component/Google/Google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Navbar from "./Component/Navbar";
import Home from "./Component/Pages/Home";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (profile) => {
    if (profile) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }


  const logoutHandler = (isloggedOut) => {
    if (isloggedOut) {
      setIsLoggedIn(false)
    }
  }

  return (
    <>
      <BrowserRouter>
        {isLoggedIn && <Navbar onlogout={logoutHandler} />}
        {!isLoggedIn && <Google onLogged={loginHandler} />}

        <Routes>
          <Route exact path='/' element={isLoggedIn && <Home />} ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
