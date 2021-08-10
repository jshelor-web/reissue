import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { isStringLiteral } from "typescript"
import { Issue, IIssueRepo } from "../core/entities/issue"

import IssueCard from "./Issue"

export interface IssueListProps {
    id: number
    title: string
    repo: IIssueRepo
}

const IssueList = (props: IssueListProps) => {
    const [issues, setIssues] = useState<Issue[]>([])
    const [newIssueBody, setNewIssueBody] = useState<string>("")
    useEffect(() => {
        const fetch = async () => {
            const promisedIssues: Issue[] = await props.repo.getIssues(props.id)
            console.log(promisedIssues)
            setIssues(promisedIssues)
        }

        fetch()
    }, [props.id, props.repo])

    const postIssue = async (body: string) => {
        const issue = await props.repo.createIssue(body)
        setIssues([...issues, issue])
    }

    return <>
        {
            issues.map((issue: Issue) => <IssueCard id={issue.id} state={issue.state} title={issue.title} body={issue.body} author={issue.author.userName} />)
        }

<Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault() 
           postIssue(newIssueBody)
        }}>
            <Form.Group controlId="exampleForm.ControlTextarea1" style={{ marginTop: "1em" }}>
                <Form.Control as="textarea" rows={3} placeholder="New comment" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewIssueBody(e.currentTarget.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Add Issue</Button>
        </Form>
    </>
}

export default IssueList