import { useState, useEffect } from "react"
import { Issue, IIssueRepo } from "../../core/entities/issue"

export const useIssues = (repo: IIssueRepo) => {
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect(() => {
        const fetch = async () => {
            const promisedIssues: Issue[] = await repo.getIssues()
            console.log(promisedIssues)
            setIssues(promisedIssues)
        }

        fetch()
    }, [repo])

    const postIssue = async (body: string) => {
        const issue = await repo.createIssue(body)
        setIssues([...issues, issue])
    }

    return {
        issues
        , postIssue
    }
}