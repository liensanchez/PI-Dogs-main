import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Index from './components/Index';
import Detail from './components/Detail';
import SearchResults from './components/SearchResults';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { allDogs, copyOfDogs } from './redux/action/action';
import Form from './components/Form';




function App() {

  const location = useLocation()

  const dispatch = useDispatch()

  const theDogs = useSelector(state => state.dogs) 

  useEffect(() => {
    dispatch(allDogs())
  }, [dispatch])

  useEffect(() => { 
    theDogs.length > 0 && dispatch(copyOfDogs(theDogs))
  },[theDogs, dispatch]) 

  return (
    <>
    {location.pathname !=='/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/dogs/:id' element={<Detail/>}/>
        <Route path='/dogs' element={<SearchResults/>}/>
        <Route path='/dogs/createdog' element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
