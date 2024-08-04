import { useContext, useEffect, useState } from 'react';

import { getMyCamps } from '../../../data/units';
import { Context } from '../../context/Context';

import { CampsiteCard } from '../catalog/campsiteCard/CampsiteCard';
import heroImg from './image/people-at-a-campsite-First.jpg';



export function MyCamps() {


    const { authData } = useContext(Context);

    const [myCamps, setMyCamps] = useState([]);

    useEffect(() => {
        const allMyCamps = async () => {

            try {
                const data = await getMyCamps(authData._id);

                if (data) {
                    setMyCamps(data);
                }

            } catch (error) {
                alert(error.message);
            }
        }

        allMyCamps();

    }, [])

    const subtitle = myCamps.length > 0
        ? 'Here are all the campsites you\'ve added'
        : 'You haven\'t added any campsites yet.';

    return (
        <>
            <div className="backgroundContainerCatalog">
                <img src={heroImg} alt="" />
            </div>

            <div className='catalogContainer'>
                <section className="textContainer">
                    <h2 className='title'>Your camps</h2>
                    <p className='subtitle'>{subtitle}</p>
                </section>

                {myCamps.length > 0 && (
                    <section className='catalog'>
                        {myCamps.map((x) => (
                            <CampsiteCard key={x._id} data={x} />
                        ))}
                    </section>
                )}
            </div>
        </>
    )
}