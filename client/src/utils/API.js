import axios from "axios";

export default {
  // ----------------------- Employee APIs -------------------------- //
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
  },

  // ------------------------ Project APIs -------------------------- //
  getProjects: function() {
    return axios.get("/api/project");
  },

  getProject: function(id) {
    return axios.get("/api/project/" + id);
  },

  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },

  saveProject: function(projectData) {
    return axios.post("/api/project", projectData);
  },

  updateProject: function(projectData) {
    console.log("Hit the update route", projectData);
    return axios.put(`/api/project/${projectData._id}`, projectData);
  }
  //   // Work Days API
  //   getUsers: function() {
  //     return axios.get("/api/user");
  //   },

  //   getUser: function(id) {
  //     return axios.get("/api/user/" + id);
  //   },
  //   deleteUser: function(id) {
  //     return axios.delete("/api/user/" + id);
  //   },

  //   saveUser: function(userData) {
  //     return axios.post("/api/user", userData);
  //   },

  //   updateUser: function(userData) {
  //     console.log("Hit the update route", userData);
  //     return axios.put(`/api/user/${userData._id}`, userData);
  //   }
};
