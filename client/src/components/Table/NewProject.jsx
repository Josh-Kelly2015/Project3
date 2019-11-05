import React from "react";
import Cell from "./Cell";
import Project from "./Project";
const NewProject = props => (
  <div className="row">
    <Project project={props.project}></Project>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
    <Cell></Cell>
  </div>
);

export default NewProject;
