import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './Create.css';
// import heroImg from './image/kevin-ianeselli-ebnlHkqfUHY-unsplash.jpg';


export function Create(params) {

    const navigate = useNavigate();

    const { values, changeHandler } = useForm({ title: '', country: '', city: '', open: '', info: '' });

    async function onSubmit(e) {
        e.preventDefault();

        // if (values.email == '' || values.password == '') {
        //     return alert('All fields are requires!');
        // }

        // if (values.password != values.repeat) {
        //     return alert('Passwords don\'t match!');
        // }

        await register(values.title, values.country, values.city, values.open, values.info);
        navigate('/');
    }
    return (
        <div className='createContainer'>
            {/* <img className='heroImg' src={heroImg} alt="image-example" /> */}

            <div className='container'>

                <form onSubmit={onSubmit} className='form' action="">
                    <label htmlFor="title"><i className="fas fa-user"></i></label>
                    <input onChange={changeHandler} type="text" name='title' placeholder='Campsite Name' value={values.title} />

                    <label htmlFor="country"><i className="fas fa-globe-americas"></i></label>
                    <input onChange={changeHandler} type="text" name='country' placeholder='Country' value={values.country} />

                    <label htmlFor="city"><i className="fas fa-city"></i></label>
                    <input onChange={changeHandler} type="text" name='city' placeholder='City' value={values.city} />

                    <label htmlFor="open"><i className="fas fa-calendar-alt"></i></label>
                    <input onChange={changeHandler} type="text" name='open' placeholder='Open' value={values.open} />

                    <label htmlFor="info"><i className="fas fa-info"></i></label>
                    <input onChange={changeHandler} type="text" name='info' placeholder='Information' value={values.info} />

                    <button className="loginBtn"><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
    )
}