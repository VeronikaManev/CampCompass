import './Home.css';
import heroImg from './image/NOTCS-Camping-Sempach----Luftaufnahme-des-Campingplatzes-am-Wasser-2e2bc516-67d0-463d-82e7-48a22fcb0c6b.jpg';


export function Home() {
    return (
        <>
            <div className="backgroundContainerHome">
                <img src={heroImg} alt="" />
            </div>
            <div className='homeContainer'>
                <h1 className='title'>Camp Compass</h1>
                <p className='subtitle'>Navigate Your Next Adventure</p>
            </div>
        </>
    )
}