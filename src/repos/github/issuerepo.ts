import { Issue, IIssueRepo } from "../../core/entities/issue"
import axios from "axios"
import { User } from "../../core/entities/user"

// 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

export class GithubIssueRepo implements IIssueRepo {
    authToken: string = ""

    constructor(authToken: string) {
        this.authToken = authToken
    }

    async getIssues(): Promise<Issue[]> {
        const result = await axios.get("https://api.github.com/repos/jshelor-web/reissue/issues", { headers: { "Authorization": `token ${this.authToken}` } })

        return result.data.map((jsonIss: any) => {
            return new Issue(jsonIss.number, jsonIss.state, jsonIss.title, jsonIss.body, new User(jsonIss.user.id, jsonIss.user.login))
        })
    }

    async createIssue(title: string): Promise<Issue> {
        const result = await axios.post(`https://api.github.com/repos/jshelor-web/reissue/issues`, { title }, { headers: { "Authorization": `token ${this.authToken}` } })

        const { data } = result

        return new Issue(data.number, data.state, data.title, data.body, new User(data.user.id, data.user.login))
    }
}