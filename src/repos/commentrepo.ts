import { Comment, ICommentRepo } from "../core/entities/comment"

export class MemCommentRepo implements ICommentRepo {
    comments: Comment[] | any[] = [
        {
            id: 1
            , body: "Here is a pithy comment"
            , issue_id: 100
            , user: {
                id: 1
            , state: "active"
            , login: "tcat"
            , user: "Top Cat"
            , body: "User is Active"
            }
        }
        , {
            id: 2
            , body: "Another comment"
            , issue_id: 101
            , user : {
                id: 2
                , state: "inactive"
                , login: "ybear"
                , user: "Yogi Bear"
                , body: "User is Inactive"
            }
           
        }

    ]

    async getComments(issueId: number): Promise<Comment[]> {
        return new Promise((resolve, reject) => {
            resolve(this.comments.filter((comment: any) => comment.issue_id === issueId)
        )});
        }
}