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


/* 
    For text, you could use the darkest color (#8d7070) for headings and the second darkest color (#aa8c8b) for body text. This would provide good contrast and make the text easy to read.

    For buttons, you could use the lightest color (#ede1e1) as the background color. This would make the buttons stand out against other elements on the page and be easily clickable.

    For navigation, footer, and cards, you could use the second lightest color (#d9c1c1) as the background color. This would provide a neutral background that won't distract from the content, but still provides a subtle contrast.

*/