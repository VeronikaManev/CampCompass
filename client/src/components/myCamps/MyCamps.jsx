import { useContext, useEffect, useState } from 'react';
import { getAllUnits, getById, getMyCamps } from '../../../data/units';
import { CampsiteCard } from '../catalog/campsiteCard/CampsiteCard';
import { Context } from '../../context/Context';
import heroImg from '../catalog/image/pexels-alan-caldwell-185375-587976.jpg';



export function MyCamps() {


    const { authData } = useContext(Context);

    const [myCamps, setMyCamps] = useState([]);

    useEffect(() => {
        const allMyCamps = async () => {

            setMyCamps(await getMyCamps(authData._id));
        }

        allMyCamps();

    }, [])

    return (
        <div className='catalogContainer'>
            <section className="imgContainer">
                <img className='heroImg' src={heroImg} alt="image-example" />
                <h2 className='title'>Your camps</h2>
            </section>

            <section className='catalog'>
                {myCamps.map((x) => (
                    <CampsiteCard key={x._id} data={x} />
                ))}
            </section>
        </div>
    )
}