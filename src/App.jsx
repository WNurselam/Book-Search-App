import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404';
import Home from './pages/Home';
import './App.css'

function App() {
  return (
   <BrowserRouter>
    <Routes>
    <Route path='*' element={<Page404/>} />
    <Route path='/' element={<Home />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
