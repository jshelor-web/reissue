import ProjectList from "./components/ProjectList"
import IssueList from "./components/IssueList"

import { GithubIssueRepo } from "./repos/github/issuerepo";
import { ProjectRepo } from "./repos/localstorage/projectrepo";

const App = () => {
  return <div>
    <ProjectList repo={new ProjectRepo()} />
    <IssueList repo={new GithubIssueRepo(String(localStorage.getItem("github_access_token")).trim())} />
  </div>
}

export default App;
