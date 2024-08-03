import { Link } from 'react-router-dom';

import './CampsiteCard.css'



export function CampsiteCard(props) {

    const campsite = props.data;

    return (
        <div className="catalogItem">

            <div className="itemImgContainer">
                <img className="itemImg" src={campsite.imageUrl} alt="example" />
            </div>

            <div className="itemInfoContainer">
                <h3>{campsite.title}</h3>
                <p>{campsite.info}</p>
            </div>

            <div className="itemMoreContainer">

                <div className="facilitiesContainer">
                    {campsite.beach && <li> <i className="fas fa-umbrella-beach"></i></li>}
                    {campsite.petFriendly && <li><i className="fas fa-paw"></i></li>}
                    {campsite.shower && <li><i className="fas fa-shower"></i></li>}
                    {campsite.wifi && <li> <i className="fas fa-wifi"></i></li>}
                </div>

                <div className="moreInfo">
                    <Link to={`/details/${campsite._id}`}>
                        <span>More</span>
                        <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                    </Link>
                </div>

            </div>

        </div>
    )
}