import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const EmployeeList = props => {
  return (
    <ListGroup>
      <ListGroupItem>{props.children}</ListGroupItem>
    </ListGroup>
  );
};

export default EmployeeList;
