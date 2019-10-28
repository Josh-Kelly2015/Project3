import axios from "axios";

export default {
  getEmployees: function() {
    return axios.get("/api/employee");
  },

  getEmployee: function(id) {
    return axios.get("/api/employee/" + id);
  },

  deleteEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  },

  saveEmployee: function(employeeData) {
    return axios.post("/api/employee", employeeData);
  }
};
