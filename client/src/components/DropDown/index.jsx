// App.js

import React from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "../../utils/API";
const techCompanies = [
  { label: "Apple", value: 1 },
  { label: "Facebook", value: 2 },
  { label: "Netflix", value: 3 },
  { label: "Tesla", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 }
];

class DropDown extends Component {
  state = {
    employee: []
  };
  // --------------- Once the page loads, call loadEmployees() ------------ //
  componentDidMount() {
    this.loadEmployees();
  }
  // --------- Make an API call to Read all data in Employees docs -------- //
  loadEmployees = () => {
    API.getEmployees()
      .then(res => this.setState({ employee: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}
export default DropDown;
