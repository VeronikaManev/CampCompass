import { useContext } from "react";
import { createComment } from "../../../../data/units";
import { useForm } from "../../../hooks/useForm";
import { Context } from "../../../context/Context";
import { useParams } from "react-router-dom";

export function AddComment({setNewComment}) {

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

            const result = await createComment(id, authData.email, values.commentText);

            setNewComment(result);
            
            clearFormData();

        } catch (error) {
            alert(error.message);
        }

    }


    return (
        <div className="addCommentContainer">
            <div className="container">
                <form onSubmit={onSubmitHandler} className="form">
                    <input onChange={changeHandler} type="textarea" name="commentText" placeholder="Add comment" value={values.commentText} />
                    <button className="addCommentBtn"><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
    );

}