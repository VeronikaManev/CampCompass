import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { getAllComments } from "../../../../data/units";
import { CommentCard } from "../commentCard/CommentCard";

import './AllComments.css';



export function AllComments({ comments, setCommentsData }) {

    const { id } = useParams();

    useEffect(() => {
        const allComments = async () => {

            try {
                const data = await getAllComments(id);

                if (data) {
                    setCommentsData(data);
                }

            } catch (error) {
                alert(error.message);
            }
        }

        allComments();
    }, [])

    return (
        <div className="allCommentsContainer">
            {comments.map(comment => <CommentCard comment={comment} key={comment._id} />)}
        </div>

    )
}