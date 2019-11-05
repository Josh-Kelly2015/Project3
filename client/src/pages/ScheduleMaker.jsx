import React, { Component } from "react";
// import Calendar from "../components/Table";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TableComponent from "../components/Table";

class ScheduleMaker extends Component {
  render() {
    return (
      // --------------------- Wrapper -------------------- //
      <div className="container-fluid">
        {/* ------------------ Header -------------------- */}
        <Header />
        {/* ------------------- Body --------------------- */}
        {/* ----------- Draggable Employees ------------ */}

        <EmployeeList />

        <TableComponent />

        {/* ------------------ Footer -------------------- */}
        <Footer />
      </div>
    );
  }
}

export default ScheduleMaker;
