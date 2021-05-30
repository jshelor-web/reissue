import {User} from "./userlogin" 

export class Comment {
    id: number
    body: string
    user: User

    constructor(id: number, body: string, user: User) {
        this.id = id
        this.body = body
        this.user = user
    }
}

export interface ICommentRepo {
    getComments(issueId: number): Comment[]
}