import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/404';
import Home from './pages/Home';
import './App.css'
import BookProvider from './context/BookContext';
import BookDetail from './pages/BookDetail';


// Context Api and React Router wrapping
function App() {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path="/detail/:id" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  )
}

export default App
