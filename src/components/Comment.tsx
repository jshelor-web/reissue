import { Card } from "react-bootstrap"

export interface CommentProps {
    body: string
    author: string
    state: string
}

const Comment = (props: CommentProps) => {
    return <Card>
        <Card.Body>
            <Card.Text>{ props.body }</Card.Text>
            <Card.Text>Comment created by <strong><em>{ props.author }</em></strong></Card.Text>
            <Card.Text>{ props.state }</Card.Text>
        </Card.Body>
    </Card>
}

export default Comment