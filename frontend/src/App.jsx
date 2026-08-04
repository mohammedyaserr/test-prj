
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Sign-up";

const App = () =>{
  return (
    <>

     <BrowserRouter>
     <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
         <Route path='/dashboard' element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );

  
};

export default App;