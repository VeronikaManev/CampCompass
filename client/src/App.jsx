import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Header } from './components/header/Header';



function App() {

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
