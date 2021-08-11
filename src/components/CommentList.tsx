import { Comment, ICommentRepo } from "../core/entities/comment"
import { useComments } from "./hooks/usecomments"

import CommentCard from "./Comment"
import NewCommentForm from "./NewCommentForm"

export interface CommentListProps {
    issueId: number
    repo: ICommentRepo
}

const CommentList = (props: CommentListProps) => {
    const { comments, postComment } = useComments(props.issueId, props.repo)

    return <>
        {
            comments.map((comment: Comment) => <CommentCard key={comment.id} comment={comment} />)
        }

        <NewCommentForm onNewComment={postComment} />
    </>
}


export default CommentList