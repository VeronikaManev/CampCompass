import './Catalog.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getById } from '../../../data/units';
import heroImg from './image/pexels-alan-caldwell-185375-587976cut.jpg';


export function Catalog(props) {

    const [camp, setCamp] = useState({
        id: "",
        title: "",
        country: "",
        city: "",
        open: "",
        imageUrl: "",
        summary: ""
    });

    const id = "3564027f-adcd-4425-b2c0-1253d2386c0c"; //TODO dynamic id

    useEffect(() => {
        const currentCamp = async () => {
            try {
                const data = await getById(id);

                if (data) {
                    setCamp(data);
                }
            } catch (error) {
                alert(error);
            }
        }
        currentCamp();
    }, [])

    return (
        <div className='catalogContainer'>
            <section className="imgContainer">
                <img className='heroImg' src={heroImg} alt="image-example" />
                <h2 className='title'>Find your dream vacation now</h2>
                <p className='subtitle'>Navigate Your Next Adventure</p>
            </section>

            <section className='catalog'>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src={camp.imageUrl} alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>{camp.title}</h3>
                        <p>{camp.summary}</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            {/* <span> <Linк to={`/catalog/3564027f-adcd-4425-b2c0-1253d2386c0c`}>View Details</Linк> </span> */}
                            {/* <span> View Details</span> */}
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Single-feat-img-10.jpg" alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>Lorem, ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error rerum ipsum nihil cum porro omnis tempora nobis iste sequi.</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            <span>More</span>
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Single-feat-img-10.jpg" alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>Lorem, ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error rerum ipsum nihil cum porro omnis tempora nobis iste sequi.</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            <span>More</span>
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Single-feat-img-10.jpg" alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>Lorem, ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error rerum ipsum nihil cum porro omnis tempora nobis iste sequi.</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            <span>More</span>
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Single-feat-img-10.jpg" alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>Lorem, ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error rerum ipsum nihil cum porro omnis tempora nobis iste sequi.</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            <span>More</span>
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

                <div className="catalogItem">

                    <div className="itemImgContainer">
                        <img className="itemImg" src="https://kamperen.qodeinteractive.com/wp-content/uploads/2021/06/Single-feat-img-10.jpg" alt="" />
                    </div>

                    <div className="itemInfoContainer">
                        <h3>Lorem, ipsum dolor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error rerum ipsum nihil cum porro omnis tempora nobis iste sequi.</p>
                    </div>

                    <div className="itemMoreContainer">

                        <div className="facilitiesContainer">
                            <i className="fas fa-umbrella-beach"></i>
                            <i className="fas fa-paw"></i>
                            <i className="fas fa-shower"></i>
                            <i className="fas fa-wifi"></i>
                        </div>

                        <div className="moreInfo">
                            <span>More</span>
                            <button className="moreBtn"><i className="fas fa-arrow-right"></i></button>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}