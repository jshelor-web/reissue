export class User {
    id: number
    userName: string

    constructor(id: number, userName: string) {
        this.id = id
        this.userName = userName
    }
}

export interface IUserRepo {
    getUsers(login: any): Promise<User[]>
}