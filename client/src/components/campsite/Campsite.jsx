import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../../../data/units';
import './Campsite.css';

// import heroImg from './image/pexels-alan-caldwell-185375-587976cut.jpg';

export function Campsite(props) {

    const {id} = useParams();
    const [currentCamp, setCurrentCamp] = useState({});


    useEffect(() => {
        const currentCamp = async () => {
            try {
                const data = await getById(id);

                if (data) {
                    setCurrentCamp(data);
                }

            } catch (error) {
                alert(error);
            }
        }
        currentCamp();
    }, []);


    
    return (

        <div className="campsiteContainer">

            <h1>Welcome to {currentCamp.title}</h1>
            <p className='shortInfo' >{currentCamp.country} | {currentCamp.city} | Open: {currentCamp.open}</p>

            <div className="innerContainer">

                <div className="imgContainer">
                    <img className='img' src={currentCamp.imageUrl} alt="example" />
                </div>

                <div className="infoContainer">
                    <p>Amenities</p>
                    <ul className="list">
                        <li>{currentCamp.country}</li>
                        <li>{currentCamp.city}</li>
                        <li>{currentCamp.open}</li>
                    </ul>
                </div>
            </div>

            <article className="article">
                <p>{currentCamp.summary}</p>
            </article>

        </div>
    )
}