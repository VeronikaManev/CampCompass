import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Catalog } from './components/catalog/Catalog';
import { Best } from './components/best/Best';
import { Campsite } from './components/camp/Campsite';




function App() {

  return (

    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog />} />



        <Route path='/catalog/3564027f-adcd-4425-b2c0-1253d2386c0c' element={<Campsite />} /> /
      

        

      </Routes>
      <Footer></Footer>
    </>

  )
}

export default App
