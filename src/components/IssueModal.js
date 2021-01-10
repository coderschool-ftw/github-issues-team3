import React, {useState, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import IssueModalError from "./IssueModalError"




function IssueModal({showModal, handleCloseModal, issue}) {
    const [comments, setComments] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        async function fetchData() {
            try {
                if(issue && issue.comments_url) {
                    let response = await fetch(issue.comments_url)
                    let data = await response.json()
                    setComments(data)
                }
                fetchData()
            } catch {
                setHasError(true)
            }
        } 
    }, [issue])

  return (
      <>
      {!hasError && ( 
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{issue.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><ReactMarkdown key={issue.key} source={issue.body}/></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
        <Modal.Body><ul>{comments.map(c =><li><ReactMarkdown key={c.key} source={c.body}/></li>)}</ul></Modal.Body>
      </Modal.Footer>
      </Modal>
      )}

      {hasError && <IssueModalError></IssueModalError>}
      </>
  );
}

export default IssueModal;