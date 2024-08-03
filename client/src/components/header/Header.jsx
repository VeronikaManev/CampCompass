import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../../context/Context';

import './Header.css';
import logoImg from './image/logo-transparent-png.png';


export function Header() {
    const { authData } = useContext(Context);

    return (
        <header className="header">
            <Link to='/'><img className='logoImg' src={logoImg} alt="logo" /></Link>
            <nav className="navigation">
                <ul className="list">
                    <li> <Link to='/about' className="list-item">About</Link> </li>
                    {!authData && <li> <Link to='/login' className="list-item">Login</Link> </li>}
                    {!authData && <li> <Link to='/register' className="list-item">Register</Link> </li>}
                    <li> <Link to='/catalog' className="list-item">Catalog</Link> </li>
                    {authData && <li> <Link to='/create' className="list-item">Create</Link> </li>}
                    {authData && <li> <Link to='/myCamps' className="list-item">My Camps</Link> </li>}
                    {authData && <li> <Link to='/logout' className="list-item">Logout</Link> </li>}

                </ul>
            </nav>
        </header>
    )
}