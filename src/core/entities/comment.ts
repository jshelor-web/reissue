import {User} from "./user" 

export class Comment {
    id: number
    body: string

    createdAt: string
    updatedAt: string

    author: User

    constructor(id: number, body: string, author: User) {
        this.id = id
        this.body = body
        this.createdAt = ""
        this.updatedAt = ""
        this.author = author
    }
}

export interface ICommentRepo {
    getComments(issueId: number): Promise<Comment[]>
    createComment(issueId: number, body: string): Promise<Comment>
}