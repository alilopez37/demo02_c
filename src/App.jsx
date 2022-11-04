import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import ListCharacter from "./components/ListCharacter";
import Characters from "./pages/Characters";
import Mortianos from "./pages/Mortianos";
import Example from "./pages/Example";
import StateContext from "./context/StateContext";
import UserContext from "./context/UserContext";


function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{isLogged:true}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/characters" element={<ListCharacter /> } />
        <Route path="*" element={<Login />} />
      </Routes>  
      </UserContext.Provider>
    </BrowserRouter>
    )
}

export default App;

