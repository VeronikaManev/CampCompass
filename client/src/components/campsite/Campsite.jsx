import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { deleteUnit, getById, getLikesCount, isAlreadyLiked, likeUnit } from '../../../data/units';
import { Context } from '../../context/Context';
import { AddComment } from './addComment/AddComment';
import { AllComments } from './allComments/AllComments';

import './Campsite.css';
import heroImg from './image/istockphoto-1422849327-170667a.webp';


export function Campsite() {

    const navigate = useNavigate();
    const { authData } = useContext(Context);
    const { id } = useParams();

    const [currentCamp, setCurrentCamp] = useState({});
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);


    function setCommentsData(data) {
        setComments(data);
    }

    function setNewComment(comment) {
        setComments(allComments => [...allComments, comment]);
    }


    async function onDeleteHandler() {

        const isConfirmed = window.confirm("Are you sure you want to delete this campsite?");

        if (isConfirmed) {

            try {
                await deleteUnit(currentCamp._id);
                navigate('/catalog');

            } catch (error) {
                alert(error.message);
            }
        }
    }


    async function onLikeHandler() {

        try {
            const data = {
                campId: currentCamp._id,
            };

            if (!hasLiked) {
                await likeUnit(data);

                setLikes(likes + 1);
                setHasLiked(true);
            }

        } catch (error) {
            alert(error.message);
        }
    }


    useEffect(() => {

        const getLikes = async () => {

            try {
                const data = await getLikesCount(id);

                if (data) {
                    setLikes(data);
                }

            } catch (error) {
                alert(error.message);
            }
        }

        getLikes();
    }, []);


    useEffect(() => {

        const isUserLiked = async () => {

            try {
                if (authData) {
                    const data = await isAlreadyLiked(id, authData._id);

                    if (data.length > 0) {
                        setHasLiked(true);
                    }
                }

            } catch (error) {
                alert(error.message);
            }
        }

        isUserLiked();
    }, []);


    useEffect(() => {
        const currentCamp = async () => {

            try {
                const data = await getById(id);

                if (data) {
                    setCurrentCamp(data);
                }

            } catch (error) {
                alert(error.message);
            }
        }
        currentCamp();
    }, [id]);


    const isOwner = authData?._id === currentCamp._ownerId;

    return (
        <>
            <div className="backgroundContainerCampsite">
                <img src={heroImg} alt="" />
            </div>

            <div className="campsiteContainer">

                <h1>Welcome to <a className='webpage' href={currentCamp.webpage} target='_blank'>{currentCamp.title}</a></h1>
                <p className='shortInfo' >{currentCamp.country} | {currentCamp.city}</p>

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


                        <div className="likesContainer">
                            <div className="likes">
                                <p>{likes}</p>
                                <i className="fas fa-heart"></i>
                            </div>

                            {authData && !isOwner && <button onClick={onLikeHandler} className='likeBtn'><i className="fas fa-thumbs-up"></i></button>}
                        </div>

                    </div>
                </div>

                <article className="article">
                    <h3 className="description">Description:</h3>
                    <p>{currentCamp.info}</p>
                </article>

                <div className="comments">

                    {comments.length > 0 && <h3 className="comment">Comments:</h3>}

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