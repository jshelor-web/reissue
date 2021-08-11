import { Card } from "react-bootstrap"
import CommentList from "./CommentList"
import {GithubComentRepo} from "../repos/github/commentrepo"
import { Issue } from "../core/entities/issue"

export interface IssueProps {
    issue: Issue
}

const IssueCard = (props: IssueProps) => {
    return <Card style={{marginBottom: "1em"}}>
        <Card.Body>
            <Card.Title>{props.issue.title}</Card.Title>
            <Card.Text>{props.issue.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <CommentList issueId={props.issue.id} repo={new GithubComentRepo(String(localStorage.getItem("github_access_token")))} />
        </Card.Footer>
    </Card>
}

export default IssueCard