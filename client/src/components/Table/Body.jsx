import React from "react";

const Body = props => (
  <tbody key={props.id} id={props.id}>
    {props.children}
  </tbody>
);

export default Body;
