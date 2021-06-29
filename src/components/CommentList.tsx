import { useState, useEffect } from "react"
import { Comment, ICommentRepo } from "../core/entities/comment"

import CommentCard from "./Comment"

export interface CommentListProps {
    issueId: number
    repo: ICommentRepo
}

const CommentList = (props: CommentListProps) => {
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const fetch = async () => {
            const promisedComments: Comment[] = await props.repo.getComments(props.issueId)
            console.log(promisedComments)
            setComments(promisedComments)
        }

        fetch()
    }, [props.issueId])

    return <>

        {
            comments.map((comment: Comment) => <CommentCard body={comment.body} author={comment.author.userName} />)
        }
    </>
}

export default CommentList