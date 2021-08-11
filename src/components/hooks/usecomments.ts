import { useState, useEffect } from "react"
import { Comment, ICommentRepo } from "../../core/entities/comment"

export const useComments = (issueId: number, repo: ICommentRepo) => {
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const fetch = async () => {
            const promisedComments: Comment[] = await repo.getComments(issueId)
            console.log(promisedComments)
            setComments(promisedComments)
        }

        fetch()
    }, [issueId, repo])

    const postComment = async (body: string) => {
        const comment = await repo.createComment(issueId, body)
        setComments([...comments, comment])
    }

    return {
        comments
        , postComment
    }
}