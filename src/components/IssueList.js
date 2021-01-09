import React from "react";
import { ListGroup, Row, Col, Figure, Image } from "react-bootstrap";

const IssueList = ({ issues, handleIssueClick }) => {
  return (
    <>
      <h2>Issue List</h2>
      <ListGroup>
        {issues.map((i) => (
          <ListGroup.Item key={i.id} action>
            <Row>
            <Col><a href={i.url} onClick={() => handleIssueClick(i)}>{i.title}</a>   Issue #{i.number}</Col>
            <Col>{i.labels}</Col><Col>{i.user.login}<Figure.Image width={70}
     height={70} src={i.user.avatar_url} alt={i.user.avatar_url} thumbnail={true}/></Col><Col>{i.updated_at}</Col>
     </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default IssueList;
