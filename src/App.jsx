import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404';
import Home from './pages/Home';
import './App.css'
import BookProvider from './context/BookContext';

function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  )
}

export default App
