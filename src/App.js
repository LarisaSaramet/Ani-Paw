import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/About";
import Services from "./pages/Services";
import Review from "./pages/Review";
import Teams from "./pages/Team";
import Adoption from "./pages/Adoption";
import SignUp from "./pages/Singup";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import Logo from "./Components/Logo";
 
function App() {
    return (
     <div>
       <div>
      
	    
        
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/> 
              <Route path="/team" element={<Teams />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/services"
                element={<Services />}
              />
              <Route
                path="/review"
                element={<Review/>}
              />
              <Route path="/adoption" element={<Adoption />} />
              <Route
                path="/sign-up"
                element={<SignUp />}
              />
              <Route path="/signin" element={<Login />} />
              <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>

      </div>
    </div>
    );
  }
  

 
export default App;

