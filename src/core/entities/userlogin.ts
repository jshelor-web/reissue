export class User {
    id: number
    state: string
    login: string
    user: string
    body: string

    constructor(id: number, state: string, login: string, user: string, body: string) {
        this.id = id
        this.state = state
        this.login = login
        this.user = user
        this.body = body
    }
}

export interface IUserRepo {
    getUsers(login: any): User[]
}