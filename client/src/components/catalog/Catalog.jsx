import { useEffect, useState } from 'react';

import { getAllUnits } from '../../../data/units';
import { CampsiteCard } from './campsiteCard/CampsiteCard';

import './Catalog.css';
import heroImg from './image/NEWcamping-activities-for-adults.jpg';



export function Catalog() {

    const [campsites, setCampsites] = useState([]);

    useEffect(() => {
        const allCampsites = async () => {

            try {
                const data = Object.values(await getAllUnits());

                if (data) {
                    setCampsites(data);
                }

            } catch (error) {
                alert(error.message);
            }
        }

        allCampsites();
    }, [])

    return (
        <>
            <div className="backgroundContainerCatalog">
                <img src={heroImg} alt="" />
            </div>

            <div className='catalogContainer'>
                <section className="textContainer">
                    <h2 className='title'>Find your dream campsite now</h2>
                    <p className='subtitle'>Navigate Your Next Adventure</p>
                </section>

                <section className='catalog'>
                    {campsites.map((x) => (
                        <CampsiteCard key={x._id} data={x} />
                    ))}
                </section>
            </div>
        </>
    )
}