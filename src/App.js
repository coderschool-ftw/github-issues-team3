import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import IssueList from "./components/IssueList";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import IssueModal from "./components/IssueModal"
import IssueListError from "./components/IssueListError"
import BounceLoader from "react-spinners/BounceLoader";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [issues, setIssues] = useState([]);
  const [url, setUrl] = useState(
    `https://api.github.com/repos/octocat/hello-world/issues`
  );
  const [selectedIssue, setSelectedIssue] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [loading, isLoading] = useState(true);




  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    async function fetchData() {
      try {
      if (url !== typeof("")) {
        let result = await fetch(url);
        let json = await result.json();
        setIssues(json);
        setTimeout(() => isLoading(false), 2000);
      }
      } catch {
        setHasError(true)
      }
    }
    fetchData();
  }, [url]);

  const handleClick = () => {
    setUrl(`https://api.github.com/repos/${searchTerm}/issues`);
    console.log(issues)
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue)
    setShowModal(true)
  }

  return (
    <Container>
      <h1 className="text-center">GitHub Issues Browser</h1>
      <Nav />
      <SearchForm
        handleChange={handleChange}
        handleClick={handleClick}
        value={searchTerm}
      />
      {!loading && (<>
      {!hasError && (<IssueList issues={issues} handleIssueClick={handleIssueClick}/>)}
      {hasError && <IssueListError hasError={hasError}></IssueListError>}
      <IssueModal showModal={showModal} handleCloseModal={handleCloseModal} issue={selectedIssue}/></>)}
      {loading && (<BounceLoader></BounceLoader>)}
      
    </Container>
  );
}

export default App;

// - [ ] The user can enter a repository in a search bar, click "search", and see the associated issues. The repository should be of the format `owner/repo-name`, e.g. `facebook/react`.
// - [ ] If the repository does not exist, the user should see a proper error message.
// - [ ] The user should be able to see the following information for each issue:
//   - Issue Title with Number of the issue
//   - Owner of the Issue
//   - Owner Avatar
//   - How long ago the issue was updated in a human-friendly format (e.g. 2 days ago)
//   - Body of the Issue
//   - Labels of the issue
// - [ ] The user should be able to see multiple pages of results, by clicking a pagination control
