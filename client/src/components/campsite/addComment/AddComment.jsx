import { useContext } from "react";
import { useParams } from "react-router-dom";

import { createComment } from "../../../../data/units";
import { useForm } from "../../../hooks/useForm";
import { Context } from "../../../context/Context";

import './AddComment.css';



export function AddComment({ setNewComment }) {

    const { id } = useParams();

    const { authData } = useContext(Context);

    const { values, changeHandler, clearFormData } = useForm({
        commentText: '',
    });


    async function onSubmitHandler(e) {
        e.preventDefault();

        try {
            if (values.commentText === '') {
                throw new Error('Please add a comment!');
            }

            const data = await createComment(id, authData.email, values.commentText);

            setNewComment(data);

            clearFormData();

        } catch (error) {
            alert(error.message);
        }
    }


    return (
        <div className="addCommentContainer">
            <form onSubmit={onSubmitHandler} className="form">
                <input onChange={changeHandler} type="textarea" name="commentText" placeholder=" Add а comment" value={values.commentText} />
                <button className="addCommentBtn"><i className="fas fa-arrow-right"></i></button>
            </form>
        </div>
    );

}