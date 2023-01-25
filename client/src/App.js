import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Index from './components/Index';
import Detail from './components/Detail';
import SearchResults from './components/SearchResults';




function App() {

  const location = useLocation()

  return (
    <>
    {location.pathname !=='/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/dogs/:id' element={<Detail/>}/>
        <Route path='/dogs' element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
