import { useState, useEffect } from "react"
import { Issue, IIssueRepo } from "../core/entities/issue"

import IssueCard from "./Issue"

export interface IssueListProps {
    repo: IIssueRepo
}

const IssueList = (props: IssueListProps) => {
    const [issues, setIssues] = useState<Issue[]>([])
    useEffect(() => {
        const fetch = async () => {
            const promisedIssues: Issue[] = await props.repo.getIssues()
            setIssues(promisedIssues)
        }

        fetch()
    }, [])

    return <>
        {
            issues.map((issue: Issue) => <IssueCard id={issue.id} title={issue.title} body={issue.body} />)
        }
    </>
}

export default IssueList