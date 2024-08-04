import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { login } from '../../../data/auth';
import { useForm } from '../../hooks/useForm';
import { Context } from '../../context/Context';

import './Login.css';
import heroImg from './image/NOpexels-cliford-mervil-988071-2398220.jpg';



export function Login() {

    const navigate = useNavigate();

    const { setContextAuthData } = useContext(Context);

    const { values, changeHandler } = useForm({
        email: '',
        password: ''
    });

    async function onSubmit(e) {
        e.preventDefault();

        try {

            if (values.email == '' || values.password == '') {
                throw new Error('All fields are required!');
            }

            const userData = await login(values.email, values.password);

            if (userData) {
                setContextAuthData(userData);
                navigate('/');
            }

        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <>
            <div className="backgroundContainerLogin">
                <img src={heroImg} alt="" />
            </div>

            <div className='loginContainer'>
                <form onSubmit={onSubmit} className='form' action="">
                    <label htmlFor="emial"><i className="fas fa-user"></i></label>
                    <input onChange={changeHandler} type="email" name='email' placeholder='E-mail' value={values.email} />

                    <label htmlFor="password"><i className="fas fa-lock"></i></label>
                    <input onChange={changeHandler} type="password" name='password' placeholder='Password' value={values.password} />

                    <button className="loginBtn"><i className="fas fa-arrow-right"></i></button>
                </form>

                <div className='newUserContainer'>
                    <p>New User?</p>
                    <Link to='/register' className="goToRegister">Create an Account</Link>
                </div>
            </div>
        </>
    )
}