import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function IssueModalError({}) {
    const [show, setShow] = useState(true)

    return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Perhpas this Issue has been removed. Try another. 
          </p>
        </Alert>
      );
}

export default IssueModalError