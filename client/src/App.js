import './App.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Index from './components/Index';




function App() {

  const location = useLocation()





  return (
    <>
    {location.pathname !=='/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
