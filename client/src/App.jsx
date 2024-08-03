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
import { ContextProvider } from './context/Context';
import { Logout } from './components/logout/Logout';
import { MyCamps } from './components/myCamps/MyCamps';
import { Edit } from './components/edit/Edit';
import { AuthGuard } from './guards/AuthGuard.';


function App() {

  return (

    <ContextProvider>
      <div>
        <Header></Header>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/details/:id' element={<Campsite />} /> /

          <Route element={<AuthGuard />}>
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/myCamps' element={<MyCamps />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

        </Routes>
      </div>
      <Footer></Footer>
    </ContextProvider >

  )
}

export default App
