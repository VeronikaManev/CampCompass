import './CampsiteCard.css'
import { Link } from 'react-router-dom';


export function CampsiteCard(props) {

    const campsite = props.data;

    return (
        <div className="catalogItem">

            <div className="itemImgContainer">
                <img className="itemImg" src={campsite.imageUrl} alt="example" />
            </div>

            <div className="itemInfoContainer">
                <h3>{campsite.title}</h3>
                <p>{campsite.summary}</p>
            </div>

            <div className="itemMoreContainer">

                <div className="facilitiesContainer">
                    <i className="fas fa-umbrella-beach"></i>
                    <i className="fas fa-paw"></i>
                    <i className="fas fa-shower"></i>
                    <i className="fas fa-wifi"></i>
                </div>

                <div className="moreInfo">
                    
                    <span><Link to={`/details/${campsite.id}`}>More</Link></span>
                    <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                </div>

            </div>

        </div>
    )
}