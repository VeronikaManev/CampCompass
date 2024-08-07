import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getById, updateUnit } from '../../../data/units';

import './Edit.css';
import heroImg from './image/tourist-tent-camping-sunset_87498-3217.avif';



export function Edit() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [formValues, setFormValues] = useState({
        title: '',
        country: '',
        city: '',
        imageUrl: '',
        info: '',
        webpage: '',
        beach: false,
        petFriendly: false,
        shower: false,
        wifi: false
    });


    useEffect(() => {
        const currentCamp = async () => {
            try {
                const data = await getById(id);

                if (data) {
                    setFormValues(data);
                }

            } catch (error) {
                alert(error);
            }
        }
        currentCamp();
    }, []);


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
            webpage: '',
            beach: false,
            petFriendly: false,
            shower: false,
            wifi: false
        });
    }

    async function editCampSubmitHandler(e) {
        e.preventDefault();

        try {

            if (formValues.title == '' || formValues.country == '' || formValues.city == '' || formValues.imageUrl == '' || formValues.info == '' || formValues.webpage == '') {
                return alert('All fields are required!');
            }

            const data = await updateUnit(id, formValues);

            if (data) {
                resetFormHandler();
                navigate(`/details/${id}`);
            }

        } catch (error) {
            alert(error.message);
        }
    }

    async function onCheckboxChangeHandler(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.checked }))
    }

    return (
        <>
            <div className="backgroundContainerEdit">
                <img src={heroImg} alt="" />
            </div>

            <div className='editContainer'>

                <form onSubmit={editCampSubmitHandler} className='form' action="">

                    <div className='info'>
                        <div>
                            <label htmlFor="title"><i className="fas fa-campground"></i></label>
                            <input onChange={changeHandler} type="text" name='title' placeholder='Campsite Name' value={formValues.title} />
                        </div>
                        <div>
                            <label htmlFor="imageUrl"><i className="fas fa-image"></i></label>
                            <input onChange={changeHandler} type="text" name='imageUrl' placeholder='Photo' value={formValues.imageUrl} />
                        </div>
                        <div>
                            <label htmlFor="webpage"><i className="fas fa-link"></i></label>
                            <input onChange={changeHandler} type="text" name='webpage' placeholder='Webpage' value={formValues.webpage} />
                        </div>
                        <div>
                            <label htmlFor="country"><i className="fas fa-globe-americas"></i></label>
                            <input onChange={changeHandler} type="text" name='country' placeholder='Country' value={formValues.country} />
                        </div>
                        <div>
                            <label htmlFor="city"><i className="fas fa-map-marker-alt"></i></label>
                            <input onChange={changeHandler} type="text" name='city' placeholder='City' value={formValues.city} />
                        </div>
                        <div>
                            <label htmlFor="info"><i className="fas fa-info"></i></label>
                            <input onChange={changeHandler} type="text" name='info' placeholder='Description' value={formValues.info} />
                        </div>
                    </div>


                    <fieldset className="fielset">
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

                    <div className="bntContainer">

                        <button className="createBtn"><i className="fas fa-check"></i></button>
                        <button type="button" onClick={resetFormHandler} className="resetBtn">X</button>

                    </div>
                </form>
            </div>
        </>
    )
}