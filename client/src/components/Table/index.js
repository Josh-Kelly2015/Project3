import React from "react";

function Table() {
  return (
    <table className="table table-bordered mt-5">
      <thead className="thead-dark">
        <tr>
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
          <th scope="row">1</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>Mark, John, George, Johnny</td>
          <td>@Mark, John, George, Johnny</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
