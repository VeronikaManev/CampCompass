import { Route, Routes } from 'react-router-dom';

import { ContextProvider } from './context/Context';

import { AuthGuard } from './guards/AuthGuard';
import { UserGuard } from './guards/UserGuard';

import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Logout } from './components/logout/Logout';
import { Catalog } from './components/catalog/Catalog';
import { MyCamps } from './components/myCamps/MyCamps';
import { Campsite } from './components/campsite/Campsite';
import { Create } from './components/create/Create';
import { Edit } from './components/edit/Edit';
import { PrivacyPolicy } from './components/privacyPolicy/PrivacyPolicy';

import './App.css';


function App() {

  return (

    <ContextProvider>
      <div>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy />} />

          <Route path='/catalog' element={<Catalog />} />
          <Route path='/details/:id' element={<Campsite />} /> /

          <Route element={<UserGuard />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/myCamps' element={<MyCamps />} />
            <Route path='/logout' element={<Logout />} />
          </Route>

        </Routes>
      </div>
      <Footer />
    </ContextProvider >
  )
}

export default App
