import axios from "axios";

export default {
  // ----------------------- Employee APIs -------------------------- //
  getUsers: function() {
    return axios.get("/api/user");
  },

  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },

  saveUser: function(employeeData) {
    return axios.post("/api/user", employeeData);
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
