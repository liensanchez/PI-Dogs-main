import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Index from './components/Index';
import Detail from './components/Detail';
import SearchResults from './components/SearchResults';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import { allDogs } from './redux/action/action';




function App() {

  const location = useLocation()

  const dispatch = useDispatch()

  const dog = useSelector(state => state.dogs)

  useEffect(() => {
    dispatch(allDogs())
  }, [dispatch])

  useEffect(() => {
    dog.length > 0 && dispatch(allDogs(dog))
  }, [dispatch])



  return (
    <>
    {location.pathname !=='/' && <Nav/>}
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/dogs/:id' element={<Detail/>}/>
        <Route path='/dogs' element={<SearchResults/>}/>
      </Routes>
    </>
  );
}

export default App;
