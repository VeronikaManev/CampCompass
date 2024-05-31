import './Header.css';
import logoImg from './image/logo-transparent-png.png';
import { Link } from 'react-router-dom';

export function Header(params) {
    return (
        <header className="header">
            <Link to='/'><img className='logoImg' src={logoImg} alt="logo" /></Link>
            <nav className="navigation">
                <ul className="list">
                    <li> <Link to='/about' className="list-item">About</Link> </li>
                    <li> <Link to='/login' className="list-item">Login</Link> </li>
                    <li> <Link to='/register' className="list-item">Register</Link> </li>
                    <li> <Link to='/catalog' className="list-item">Catalog</Link> </li>
                    <li> <Link to='/best' className="list-item">Best</Link> </li>

                </ul>
            </nav>
        </header>
    )
}