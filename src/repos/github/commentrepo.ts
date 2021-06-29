import { Comment, ICommentRepo } from "../../core/entities/comment"
import axios from "axios"
import { User } from "../../core/entities/user"

// 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

export class GithubComentRepo implements ICommentRepo {
    authToken: string = ""

    constructor(authToken: string) {
        this.authToken = authToken
    }

    async getComments(issueId: number): Promise<Comment[]> {
        const result = await axios.get(`https://api.github.com/repos/jshelor-web/reissue/issues/${issueId}/comments`, {headers: { "Authorization": `token ${this.authToken}`}})
        
        return result.data.map((jsonComment: any) => {
            return new Comment(jsonComment.id, jsonComment.body, new User(jsonComment.user.id, jsonComment.user.login))
        })
    }
}