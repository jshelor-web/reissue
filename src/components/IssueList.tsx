import { Issue, IIssueRepo } from "../core/entities/issue"

import IssueCard from "./Issue"
import NewIssueForm from "./NewIssueForm"

import { useIssues } from "./hooks/useissues"

export interface IssueListProps {
    repo: IIssueRepo
}

const IssueList = (props: IssueListProps) => {
    const { issues, postIssue } = useIssues(props.repo)

    return <div className="issue-list">
        {
            issues.map((issue: Issue) => <IssueCard key={issue.id} issue={issue} />)
        }

        <NewIssueForm onNewIssue={postIssue} />
    </div>
}

export default IssueList