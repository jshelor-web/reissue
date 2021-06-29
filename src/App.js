import IssueList from "./components/IssueList"
import { GithubIssueRepo } from "./repos/github/issuerepo";

const App = () => {
  return <div>
    <IssueList repo={new GithubIssueRepo(localStorage.getItem("github_access_token"))} />
  </div>
}

export default App;
