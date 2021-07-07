import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function IssueListError({setHasError}) {
    const [show, setShow] = useState(true)
    
    return (
        <Alert variant="danger" onClose={() => setShow(false) && setHasError(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Perhpas there are no Issues here. Try searching with 'owner/repo-name' .
          </p>
        </Alert>
      );
}

export default IssueListError