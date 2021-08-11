import { Issue, IIssueRepo } from "../core/entities/issue"

export class MemIssueRepo implements IIssueRepo {
    issues: Issue[] = [
        {
            id: 100
            , state: "open"
            , title: "An issues"
            , body: ""
            , createdAt: ""
            , updatedAt: ""
            , author: {
                id: 0
                , userName: ""
            }
        }
        , {
            id: 101
            , state: "open"
            , title: "Another issue"
            , body: "Here is the body"
            , createdAt: ""
            , updatedAt: ""
            , author: {
                id: 0
                , userName: ""
            }
        }
    ]

    async getIssues(): Promise<Issue[]> {
        return new Promise((resolve, reject) => {
            resolve(this.issues);
        });
    }

    async createIssue(title: string): Promise<Issue> {
        return new Promise((resolve, reject) => {
            resolve({
                id: 102
                , state: "open"
                , title: title
                , body: ""
                , createdAt: ""
                , updatedAt: ""
                , author: {
                    id: 0
                    , userName: ""
                }
            });
        });
    }
}