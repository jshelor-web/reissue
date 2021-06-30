import React, { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { Comment, ICommentRepo } from "../core/entities/comment"

import CommentCard from "./Comment"

export interface CommentListProps {
    issueId: number
    repo: ICommentRepo
}

const CommentList = (props: CommentListProps) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [newCommentBody, setNewCommentBody] = useState<string>("")

    useEffect(() => {
        const fetch = async () => {
            const promisedComments: Comment[] = await props.repo.getComments(props.issueId)
            console.log(promisedComments)
            setComments(promisedComments)
        }

        fetch()
    }, [props.issueId])

    const postComment = async (body: string) => {
        const comment = await props.repo.createComment(props.issueId, body)
        setComments([...comments, comment])
    }

    return <>
        {
            comments.map((comment: Comment) => <CommentCard body={comment.body} author={comment.author.userName} />)
        }

        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
           e.preventDefault() 
           postComment(newCommentBody)
        }}>
            <Form.Group controlId="exampleForm.ControlTextarea1" style={{ marginTop: "1em" }}>
                <Form.Control as="textarea" rows={3} placeholder="New comment" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCommentBody(e.currentTarget.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </>
}

export default CommentList