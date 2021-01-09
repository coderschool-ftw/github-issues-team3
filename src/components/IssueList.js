import React from "react";

const IssueList = ({issues, handleIssueClick}) => {
  return (
      <>
      <h2>Issue List</h2>
      <ul>
          {issues.map(i => <li key={i.id}><a href='#' onClick={() => handleIssueClick(i)}>{i.title}</a></li>)}
      </ul>
      </>
  )
};


export default IssueList