import { Card } from "react-bootstrap"
import CommentList from "./CommentList"
import {GithubComentRepo} from "../repos/github/commentrepo"

export interface IssueProps {
    id: number
    title: string
    body: string
}

const Issue = (props: IssueProps) => {
    return <Card style={{marginBottom: "1em"}}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <CommentList issueId={props.id} repo={new GithubComentRepo(String(localStorage.getItem("github_access_token")))} />
        </Card.Footer>
    </Card>
}

export default Issue