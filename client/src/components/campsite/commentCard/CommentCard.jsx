import './CommentCard.css';

export function CommentCard({comment}) {

    return (
        <div className="commentCardContainer">
            <p className="commentEmail">{comment.email}:</p>
            <p className="commentText">{comment.text}</p>
        </div>

    )
}