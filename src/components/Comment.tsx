import { Card } from "react-bootstrap"
import { Comment } from "../core/entities/comment"

export interface CommentProps {
    comment: Comment
}

const CommentCard = (props: CommentProps) => {
    return <Card style={{marginBottom: "1em"}}>
        <Card.Body>
            <Card.Text>{ props.comment.body }</Card.Text>
            <Card.Text>Comment created by <strong><em>{ props.comment.author.userName }</em></strong></Card.Text>
        </Card.Body>
    </Card>
}

export default CommentCard