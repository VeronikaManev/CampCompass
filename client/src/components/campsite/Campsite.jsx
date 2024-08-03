import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { deleteUnit, getById } from '../../../data/units';
import './Campsite.css';
import { AddComment } from './addComment/AddComment';
import { Context } from '../../context/Context';
import { AllComments } from './allComments/AllComments';
import heroImg from './image/istockphoto-1422849327-170667a.webp';


export function Campsite(props) {

    const navigate = useNavigate();

    const { authData } = useContext(Context);

    const { id } = useParams();

    const [currentCamp, setCurrentCamp] = useState({});

    const [comments, setComments] = useState([]);

    function setCommentsData(data) {
        setComments(data);
    }

    function setNewComment(comment) {
        setComments(allComments => [...allComments, comment]);
    }

    async function onDeleteHandler() {
        await deleteUnit(currentCamp._id);
        navigate('/catalog');
    }

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

    const isOwner = authData?._id === currentCamp._ownerId;

    return (
        <>
            <div className="backgroundContainerCampsite">
                <img src={heroImg} alt="" />
            </div>

            <div className="campsiteContainer">

                <h1>Welcome to {currentCamp.title}</h1>
                <p className='shortInfo' >{currentCamp.country} | {currentCamp.city}</p>
                <p className='webpage' >{currentCamp.webpage}</p>

                <div className="innerContainer">

                    <div className="imgContainer">
                        <img className='img' src={currentCamp.imageUrl} alt="example" />
                    </div>

                    <div className="infoContainer">
                        <h3>Amenities:</h3>
                        <ul className="list">
                            {currentCamp.beach && <li> <i className="fas fa-umbrella-beach"></i>Beach</li>}
                            {currentCamp.petFriendly && <li><i className="fas fa-paw"></i>Pet friendly</li>}
                            {currentCamp.shower && <li><i className="fas fa-shower"></i>Shower</li>}
                            {currentCamp.wifi && <li> <i className="fas fa-wifi"></i>Wi-Fi</li>}
                        </ul>

                        {authData && isOwner &&
                            <div className="corrections">
                                <Link to={`/edit/${currentCamp._id}`}><button className='editBtn'><i className="fas fa-pencil-alt"></i></button></Link>
                                <button onClick={onDeleteHandler} className='deleteBtn'><i className="fas fa-trash-alt"></i></button>
                            </div>}
                    </div>
                </div>

                <article className="article">
                    <h3 className="description">Description:</h3>
                    <p>{currentCamp.info}</p>
                </article>

                <div className="comments">

                    {comments.length>0 && <h3 className="comment">Comments:</h3>}

                    <div className="addCommentContainer">
                        {authData && <AddComment setNewComment={setNewComment} />}
                    </div>

                    <div className="allComments">
                        <AllComments comments={comments} setCommentsData={setCommentsData} />
                    </div>

                </div>

            </div >
        </>
    )
}