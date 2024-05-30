import './Login.css';
import heroImg from './image/dominik-jirovsky-re2LZOB2XvY-unsplash.jpg';
import { Link } from 'react-router-dom';

export function Login(params) {
    return (
        <div className='loginContainer'>
            <img className='heroImg' src={heroImg} alt="image-example" />

            <div className='container'>

                <form className='form' action="">
                    <label htmlFor="emial"><i className="fas fa-user"></i></label>
                    <input type="email" name='email' placeholder='E-mail' />

                    <label htmlFor="password"><i className="fas fa-lock"></i></label>
                    <input type="password" name='password' placeholder='Password' />

                    <button className="loginBtn"><i class="fas fa-arrow-right"></i></button>
                </form>

                <div className='newUserContainer'>
                    <p>New User?</p>
                    <Link to='/register' className="goToRegister">Create an Account</Link>
                </div>
            </div>
        </div>
    )
}