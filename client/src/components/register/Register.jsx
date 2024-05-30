import './Register.css';
import heroImg from './image/kevin-ianeselli-ebnlHkqfUHY-unsplash.jpg';
import { Link } from 'react-router-dom';

export function Register(params) {
    return (
        <div className='registerContainer'>
            <img className='heroImg' src={heroImg} alt="image-example" />

            <div className='container'>

                <form className='form' action="">
                    <label htmlFor="emial"><i className="fas fa-user"></i></label>
                    <input type="email" name='email' placeholder='E-mail' />

                    <label htmlFor="password"><i className="fas fa-lock"></i></label>
                    <input type="password" name='password' placeholder='Password' />

                    <label htmlFor="repeat"><i class="fas fa-redo-alt"></i></label>
                    <input type="password" name='repeat' placeholder='Repeat password' />

                    <button className="loginBtn"><i class="fas fa-arrow-right"></i></button>
                </form>

                <div className='newUserContainer'>
                    <p>Already have an account?</p>
                    <Link to='/login' className="goToRegister">Sign in</Link>
                </div>
            </div>
        </div>
    )
}