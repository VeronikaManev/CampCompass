import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { register } from '../../../data/auth';
import './Register.css';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import heroImg from './image/NOkevin-ianeselli-ebnlHkqfUHY-unsplash.jpg';


export function Register() {

    const navigate = useNavigate();

    const { setContextAuthData } = useContext(Context);

    const { values, changeHandler } = useForm({
        email: '',
        password: '',
        repeat: ''
    });

    async function onSubmit(e) {
        e.preventDefault();
        const userData = await register(values.email, values.password);
        setContextAuthData(userData);

        if (values.email == '' || values.password == '') {
            return alert('All fields are requires!');
        }

        if (values.password != values.repeat) {
            return alert('Passwords don\'t match!');
        }

        navigate('/');
    }

    return (
        <>
            <div className="backgroundContainerRegister">
                <img src={heroImg} alt="" />
            </div>

            <div className='registerContainer'>

                <form onSubmit={onSubmit} className='form' action="">
                    <label htmlFor="email"><i className="fas fa-user"></i></label>
                    <input onChange={changeHandler} type="email" name='email' placeholder='E-mail' value={values.email} />

                    <label htmlFor="password"><i className="fas fa-lock"></i></label>
                    <input onChange={changeHandler} type="password" name='password' placeholder='Password' value={values.password} />

                    <label htmlFor="repeat"><i className="fas fa-redo-alt"></i></label>
                    <input onChange={changeHandler} type="password" name='repeat' placeholder='Repeat password' value={values.repeat} />

                    <button className="registerBtn"><i className="fas fa-arrow-right"></i></button>
                </form>

                <div className='newUserContainer'>
                    <p>Already have an account?</p>
                    <Link to='/login' className="goToLogin">Sign in</Link>
                </div>
            </div>
        </>
    )
}