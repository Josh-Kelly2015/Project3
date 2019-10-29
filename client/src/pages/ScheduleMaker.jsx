import React, { Component } from "react";
import TableComponent from "../components/Table";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ScheduleMaker extends Component {
  render() {
    return (
      // --------------------- Wrapper -------------------- //
      <div className="container-fluid">
        {/* ------------------ Header -------------------- */}
        <Header />
        {/* ------------------- Body --------------------- */}
        {/* ----------- Draggable Employees ------------ */}
        <div className="container">
          <EmployeeList />
        </div>
        {/* ------------- Schedule Table --------------- */}
        <div className="container">
          <TableComponent />
        </div>
        {/* ------------------ Footer -------------------- */}
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
