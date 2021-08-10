import {User} from "./user"

export class Issue {
    id: number
    state: string
    title: string
    body: string

    createdAt: string
    UpdatedAt: string

    author: User

    constructor(id: number, state: string, title: string, body: string, author: User) {
        this.id = id
        this.state = state
        this.title = title
        this.body = body
        this.createdAt = ""
        this.UpdatedAt = ""
        this.author = author
    }
}

export interface IIssueRepo {
    getIssues(id: number): Promise<Issue[]>
    createIssue(title: string): Promise<Issue>
}