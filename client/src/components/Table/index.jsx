import React from "react";
// import Board from "../Board";
function Table() {
  return (
    <table className="table table-bordered text-info">
      <thead className="thead-dark">
        <tr className="text-danger">
          <th scope="col">Project</th>
          <th scope="col">Monday</th>
          <th scope="col">Tuesday</th>
          <th scope="col">Wednesday</th>
          <th scope="col">Thursday</th>
          <th scope="col">Friday</th>
          <th scope="col">Saturday</th>
          <th scope="col">Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">0001 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0002 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0003 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">0004 Project Name</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
