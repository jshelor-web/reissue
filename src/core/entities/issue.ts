import {User} from "./user"

export class Issue {
    id: number
    state: string
    title: string
    body: string

    createdAt: string
    updatedAt: string

    author: User

    constructor(id: number, state: string, title: string, body: string, author: User) {
        this.id = id
        this.state = state
        this.title = title
        this.body = body
        this.createdAt = ""
        this.updatedAt = ""
        this.author = author
    }
}

export interface IIssueRepo {
    getIssues(): Promise<Issue[]>
    createIssue(title: string): Promise<Issue>
}