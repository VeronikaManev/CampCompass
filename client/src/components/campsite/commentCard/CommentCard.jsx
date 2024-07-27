import './CommentCard.css';

export function CommentCard({comment}) {

    return (
        <div className="commentCard">
            <p className="commentEmail">{comment.email}</p>
            <p className="commentText">{comment.text}</p>
        </div>

    )
}