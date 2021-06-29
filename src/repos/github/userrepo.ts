import { User, IUserRepo } from "../../core/entities/user"
import axios from "axios"

// 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

export class GithubUserRepo implements IUserRepo {
    authToken: string = ""

    constructor(authToken: string) {
        this.authToken = authToken
    }

    async getUsers(login: any): Promise<User[]> {
        const result = await axios.get("https://api.github.com/repos/jshelor-web/reissue/users", {headers: { "Authorization": `token ${this.authToken}`}})

        return result.data
    }
}