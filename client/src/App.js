import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Views/Home';
import Index from './components/Views/Index';
import SearchResults from './components/Views/SearchResults';
import Error from './components/Views/Error';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { allDogs, copyOfDogs } from './redux/action/action';
import Form from './components/Views/Form';
import Detail from './components/Views/Detail';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3003/'



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
        <Route path='/*' element={<Error to="/error" replace/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
