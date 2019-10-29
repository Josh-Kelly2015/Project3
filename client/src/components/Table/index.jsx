import React from "react";

function Table(props) {
  return (
    <table className="table table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
          <th scope="col">{props.children}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.children}</th>
          <td>{props.children}</td>
        </tr>
        <tr>
          <th scope="row">{props.children}</th>
          <td>{props.children}</td>
        </tr>
        <tr>
          <th scope="row">{props.children}</th>
          <td>{props.children}</td>
        </tr>
        <tr>
          <th scope="row">{props.children}</th>
          <td>{props.children}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
