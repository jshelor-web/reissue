import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export interface NewCommentFormProps {
    onNewComment: (body: string) => void
}

const NewCommentForm = (props: NewCommentFormProps) => {
    const [newCommentBody, setNewCommentBody] = useState<string>("")

    return <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onNewComment(newCommentBody)
    }}>
        <Form.Group controlId="exampleForm.ControlTextarea1" style={{ marginTop: "1em" }}>
            <Form.Control as="textarea" rows={3} placeholder="New comment" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCommentBody(e.currentTarget.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Comment</Button>
    </Form>
}

export default NewCommentForm