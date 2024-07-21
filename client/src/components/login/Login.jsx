import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../data/auth';
import { useForm } from '../../hooks/useForm';
import './Login.css';
import heroImg from './image/pexels-cliford-mervil-988071-2398220.jpg';
import { useContext } from 'react';
import { Context } from '../../context/context';


export function Login() {

    const navigate = useNavigate();
    const {setContextData} = useContext(Context);
    
    // const {loginSubmitHandler} = useContext(Context);

    const { values, changeHandler } = useForm({
        email: '',
        password: ''
    });

    async function onSubmit(e) {
        e.preventDefault();
    const userData = await login(values.email, values.password);
    setContextData((state)=>({...state, userData}))


        // loginSubmitHandler(values)
        navigate('/');
    }
    
    return (
        <div className='loginContainer'>
            <img className='heroImg' src={heroImg} alt="image-example" />

            <div className='container'>

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
        </div>
    )
}