import './Catalog.css';
import { useEffect, useState } from 'react';
import { getAllUnits, getById } from '../../../data/units';
import heroImg from './image/pexels-alan-caldwell-185375-587976cut.jpg';
import { CampsiteCard } from './campsiteCard/CampsiteCard';


export function Catalog() {

    const [campsites, setCampsites] = useState([]);

    useEffect(() => {
        const allCampsites = async () => {

            // const data = await getAllUnits();
            setCampsites(Object.values(await getAllUnits()))
        }

        allCampsites();

    }, [])

    return (
        <div className='catalogContainer'>
            <section className="imgContainer">
                <img className='heroImg' src={heroImg} alt="image-example" />
                <h2 className='title'>Find your dream vacation now</h2>
                <p className='subtitle'>Navigate Your Next Adventure</p>
            </section>

            <section className='catalog'>
                {campsites.map((x) => (
                    <CampsiteCard key={x._id} data={x} />
                ))}
            </section>
        </div>
    )
}