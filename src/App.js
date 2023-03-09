import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projetos from "./Components/Projetos"
import Contato from "./Components/Contato"
import SobreMim from "./Components/SobreMim"
import Home from "./Components/Home";
import Container from "./Components/Container";
import "./App.css"
import HomeButton from "./Components/HomeButton";


function App() {
  return (

  
    <Router>
     
        <HomeButton/>
            <Container>
                <Routes>
                    <Route exact path="/" element = {<Home/>}>
                    </Route>
                    <Route exact path="/Projetos" element = {<Projetos/>}>
                    </Route>
                    <Route exact path="/SobreMim" element = {<SobreMim/>}>
                    </Route>
                    <Route exact path="/Contato" element = {<Contato/>}>
                    </Route>
                </Routes>
            </Container>

          
    </Router>
    
       
    

  )
}
export default App;
