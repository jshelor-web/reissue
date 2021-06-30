import IssueList from "./components/IssueList"
import { GithubIssueRepo } from "./repos/github/issuerepo";

const App = () => {
  return <div>
    <IssueList repo={new GithubIssueRepo(String(localStorage.getItem("github_access_token")).trim())} />
  </div>
}

export default App;
