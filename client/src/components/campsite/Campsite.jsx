import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { deleteUnit, getById } from '../../../data/units';
import './Campsite.css';
import { AddComment } from './addComment/AddComment';
import { Context } from '../../context/Context';
import { AllComments } from './allComments/AllComments';

// import heroImg from './image/pexels-alan-caldwell-185375-587976cut.jpg';

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

        <div className="campsiteContainer">

            <h1>Welcome to {currentCamp.title}</h1>
            <p className='shortInfo' >{currentCamp.country} | {currentCamp.city} | Open: {currentCamp.open}</p>

            <div className="innerContainer">

                <div className="imgContainer">
                    <img className='img' src={currentCamp.imageUrl} alt="example" />
                </div>

                <div className="infoContainer">
                    <p>Amenities</p>
                    <ul className="list">
                        <li>{currentCamp.country}</li>
                        <li>{currentCamp.city}</li>
                        <li>{currentCamp.open}</li>
                    </ul>
                </div>
            </div>

            <article className="article">
                <p>{currentCamp.summary}</p>
            </article>


            {authData && isOwner && <div className="corrections">
                <button className='editBtn'>Edit</button>
                <button onClick={onDeleteHandler} className='deleteBtn'>Delete</button>
            </div>}

            <div className="comments">

                <div className="allComments">
                    <AllComments comments={comments} setCommentsData={setCommentsData} />
                </div>

                <div className="addCommentContainer">
                    {authData && <AddComment setNewComment={setNewComment} />}

                </div>

            </div>

        </div >
    )
}

// Да се добави визуализирането на коментарите