import React from "react";
import { ListGroup, Row, Col, Figure, Badge } from "react-bootstrap";
import ReactMarkdown from "react-markdown"
import moment from 'moment';
const fontColorContrast = require('font-color-contrast');


const IssueList = ({ issues, handleIssueClick }) => {
  return (
    <>
      <h2>Issue List</h2>
      <ListGroup>
        {issues.map((i) => (
          <ListGroup.Item key={i.id} action>
            <Col><Row className="mx-auto">
              <a href="#" onClick={() => handleIssueClick(i)}><ReactMarkdown source={i.title}/>
              </a><Col className="d-flex-column">{i.labels.map(o => (<Badge style={{ backgroundColor: `#${o.color}`, color:`${fontColorContrast(`#${o.color}`)}`}} pill>{o.name}</Badge>))}</Col></Row></Col>
              <Row className="mx-auto">#{i.number}{" "}opened{" "}{moment(i.updated_at).fromNow()}{" "}by{" "}<Col>{i.user.login}<Figure.Image width={20}
           height={20} src={i.user.avatar_url} alt={i.user.avatar_url} thumbnail={true} rounded/></Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default IssueList;