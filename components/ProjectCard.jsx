import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <div className="col-md-6">
      <Card className="h-100 shadow">
        <a href={props.projectlink}>
          <Card.Img variant="top" src={props.projectImage} />
        </a>
        <Card.Body className="p-5">
          <Card.Title className="fw-bold text-uppercase mb-4 fs-3">
            {props.projectName}
          </Card.Title>
          <Card.Text>{props.projectDesc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCard;
