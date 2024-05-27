import './Home.css';
import heroImg from './image/TCS-Camping-Sempach----Luftaufnahme-des-Campingplatzes-am-Wasser-2e2bc516-67d0-463d-82e7-48a22fcb0c6b.jpg';


export function Home(params) {
    return (
        <div className='homeContainer'>
            <img className='heroImg' src={heroImg} alt="image-example" />
            <h1>CampCompass</h1>

        </div>
    )
}