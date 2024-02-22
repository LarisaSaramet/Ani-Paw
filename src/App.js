
  // filename -App.js
 
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
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
    );
  }
  

 
export default App;
  /*const [isLogin, setIsLogin] = useState(true); // Starea care indică dacă utilizatorul este în proces de autentificare sau înregistrare

  // Funcția care schimbă starea între autentificare și înregistrare
  const handleSwitch = () => {
    setIsLogin(prevState => !prevState); // Se inversează valoarea stării
  };

  return (
    <Router>
   
      <div className="container">
        <div className="form-container">
          {isLogin ? <Login /> : <Register />} {/* Afișează Login sau Register în funcție de starea isLogin */
         /* <button className= "btn" onClick={handleSwitch}>
            {isLogin ? ' Sign up' : 'Back to Login'} {/* Buton pentru a schimba între autentificare și înregistrare */
          /*</button>
        </div>
      </div>
    </Router>
  );*/
  

