import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export interface NewIssueFormProps {
    onNewIssue: (title: string) => void
}

const NewIssueForm = (props: NewIssueFormProps) => {
    const [newIssueTitle, setNewIssueTitle] = useState<string>("")

    return <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        props.onNewIssue(newIssueTitle)
    }}>
        <Form.Group controlId="exampleForm.ControlTextarea1" style={{ marginTop: "1em" }}>
            <Form.Control as="textarea" rows={3} placeholder="New issue" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewIssueTitle(e.currentTarget.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Add Issue</Button>
    </Form>
}

export default NewIssueForm