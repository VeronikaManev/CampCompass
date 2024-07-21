import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './Create.css';
import { createUnit } from '../../../data/units';
import { useState } from 'react';
// import heroImg from './image/kevin-ianeselli-ebnlHkqfUHY-unsplash.jpg';


export function Create(params) {

    const navigate = useNavigate();

    // const { values } = useForm({ title: '', country: '', city: '', open: '', info: '' });

    const [formValues, setFormValues] = useState({
        title: '',
        country: '',
        city: '',
        imageUrl: '',
        info: '',
        beach: false,
        petFriendly: false,
        shower: false,
        wifi: false
    });

    const changeHandler = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const resetFormHandler = () => {
        setFormValues({
            title: '',
            country: '',
            city: '',
            imageUrl: '',
            info: '',
            beach: false,
            petFriendly: false,
            shower: false,
            wifi: false
        });
    }

    async function createCampSubmitHandler(e) {
        e.preventDefault();

        const campData = Object.fromEntries(new FormData(e.currentTarget));

        
        await createUnit(campData);

        // if (values.email == '' || values.password == '') {
        //     return alert('All fields are requires!');
        // }

        // if (values.password != values.repeat) {
        //     return alert('Passwords don\'t match!');
        // }

        resetFormHandler();
        navigate('/catalog');
    }

    async function onCheckboxChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.checked }))
    }

    return (
        <div className='createContainer'>
            {/* <img className='heroImg' src={heroImg} alt="image-example" /> */}

            <div className='container'>

                <form onSubmit={createCampSubmitHandler} className='form' action="">
                    <label htmlFor="title"><i className="fas fa-user"></i></label>
                    <input onChange={changeHandler} type="text" name='title' placeholder='Campsite Name' value={formValues.title} />

                    <label htmlFor="country"><i className="fas fa-globe-americas"></i></label>
                    <input onChange={changeHandler} type="text" name='country' placeholder='Country' value={formValues.country} />

                    <label htmlFor="city"><i className="fas fa-city"></i></label>
                    <input onChange={changeHandler} type="text" name='city' placeholder='City' value={formValues.city} />

                    <label htmlFor="imageUrl"><i className="fas fa-calendar-alt"></i></label>
                    <input onChange={changeHandler} type="text" name='imageUrl' placeholder='Photo' value={formValues.imageUrl} />

                    <label htmlFor="info"><i className="fas fa-info"></i></label>
                    <input onChange={changeHandler} type="text" name='info' placeholder='Information' value={formValues.info} />

                    <fieldset className='fielset'>
                        <legend>Mark if available:</legend>

                        <div>
                            <input onChange={onCheckboxChangeHandler} type="checkbox" id="beach" name="beach" checked={formValues.beach} />
                            <i className="fas fa-umbrella-beach"></i>
                            <label htmlFor="beach">Beach</label>
                        </div>

                        <div>
                            <input onChange={onCheckboxChangeHandler} type="checkbox" id="petFriendly" name="petFriendly" checked={formValues.petFriendly} />
                            <i className="fas fa-paw"></i>
                            <label htmlFor="petFriendly">Pet friendly</label>
                        </div>

                        <div>
                            <input onChange={onCheckboxChangeHandler} type="checkbox" id="shower" name="shower" checked={formValues.shower} />
                            <i className="fas fa-shower"></i>
                            <label htmlFor="shower">Shower</label>
                        </div>

                        <div>
                            <input onChange={onCheckboxChangeHandler} type="checkbox" id="wifi" name="wifi" checked={formValues.wifi} />
                            <i className="fas fa-wifi"></i>
                            <label htmlFor="wifi">Wi-Fi</label>
                        </div>

                    </fieldset>

                    <button className="createBtn"><i className="fas fa-arrow-right"></i></button>
                    <button onClick={resetFormHandler} className="resetBtn">X</button>

                </form>
            </div>
        </div>
    )
}