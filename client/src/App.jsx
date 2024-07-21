import './App.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { login } from '../data/auth';

import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Catalog } from './components/catalog/Catalog';
import { Campsite } from './components/campsite/Campsite';
import { Create } from './components/create/Create';
import { ContextProvider } from './context/context';


function App() {

  // const [auth, setAuth] = useState({});

  // const loginSubmitHandler = async (values) => {
  //   const user = await login(values.email, values.password);
  //   setAuth(user);
  // }

  return (

    <ContextProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/create' element={<Create />} />


        <Route path='/details/:id' element={<Campsite />} /> /
      </Routes>
      <Footer></Footer>
    </ContextProvider>

  )
}

export default App
