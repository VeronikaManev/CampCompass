import { useParams } from "react-router-dom";
import { getAllComments } from "../../../../data/units";
import { useEffect, useState } from "react";
import { CommentCard } from "../commentCard/CommentCard";
import './AllComments.css';


export function AllComments({comments, setCommentsData}) {

    const { id } = useParams();


    useEffect(() => {
        const allComments = async () => {

            setCommentsData(await getAllComments(id));
        }

        allComments();

    }, [])

    return (
        <div className="allCommentsContainer">
            {comments.map(comment => <CommentCard comment={comment} key={comment._id}/>)}
        </div>

    )

}