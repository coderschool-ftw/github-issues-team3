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
import PaginationBar from './components/PaginationBar';

function App() {
  const issuesPerPage = 30; // GitHub default size
  const [searchTerm, setSearchTerm] = useState("");
  const [issues, setIssues] = useState([]);
  // const [url, setUrl] = useState(
  //   `https://api.github.com/repos/octocat/hello-world/issues`
  // );
  const [url, setUrl] = useState('');
  const [selectedIssue, setSelectedIssue] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [hasError, setHasError] = useState(false)
  const [loading, isLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalIssuesCount, setTotalIssuesCount] = useState(1);
  const [finalQuery,setFinalQuery] = useState('');




  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    async function fetchData() {
      try {
      if (url !== "") {
        let result = await fetch(url);
        let json = await result.json();
        if(Array.isArray(json)){
          setIssues(json);
          setHasError(false);
        }
        else{
          setIssues([]);
          setHasError(true);
        }
        setTimeout(() => isLoading(false), 2000);
        setUrl('');
      }
      } catch {
        setHasError(true)
      }
    }
    fetchData();
  }, [url]);
  useEffect(()=>{
    async function fetchTotalIssuesCount(){
      if(finalQuery !== ""){
        let data = await fetch(`https://api.github.com/repos/${finalQuery}`);
        let json = await data.json();
        let totalIssues = json.open_issues_count
        console.log("Total issues", totalIssues);
        if(totalIssues !== undefined){
          setTotalIssuesCount(totalIssues);
        }
      }
    }
    fetchTotalIssuesCount();
  },[finalQuery])

  const handleClick = () => {
    setCurrentPage(1);
    if(searchTerm === "" || !searchTerm.includes('/')){
      return;
    }
    let searchTermMatching = simpleFuzzyMatching(searchTerm);
    setSearchTerm(searchTermMatching);
    setUrl(`https://api.github.com/repos/${searchTermMatching}/issues`);
    setFinalQuery(searchTermMatching);
    isLoading(true);
  };
  const simpleFuzzyMatching =  (input) => {
    const array = input.split('/');
    if(array.length === 2){
      return array.join('/');
    }
    if(array.length >= 2){
      return array.slice(-2).join('/');
    }
  }
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue)
    setShowModal(true)
  }
  const handleChangePage = (page)=>{
    setCurrentPage(page);
    setUrl(`https://api.github.com/repos/${searchTerm}/issues?page=${page}`)
    isLoading(true);
  }

  return (
    <>
    <Nav />
    <Container>
      <SearchForm
        handleChange={handleChange}
        handleClick={handleClick}
        value={searchTerm}
      />
      <PaginationBar 
        totalIssuesCount={totalIssuesCount} 
        issuesPerPage={issuesPerPage} 
        currentPage = {currentPage} 
        clicked = {handleChangePage}/>
      {!loading && (<>
      {!hasError && (<IssueList issues={issues} handleIssueClick={handleIssueClick}/>)}
      {hasError && <IssueListError hasError={hasError}></IssueListError>}
      <IssueModal showModal={showModal} handleCloseModal={handleCloseModal} issue={selectedIssue}/></>)}
      {loading && (<BounceLoader></BounceLoader>)}
      
    </Container>
    </>
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
