import axios from "axios";

export const login = user => {
  return axios
    .get("user/Login", {
      email: user.email,
      password: user.password
    })
    .then(user => {
      localStorage.setItem("usertoken", user.data);
      return user.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProfile = user => {
  return axios
    .get("users/profile", {
      headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};
export const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log("Registered");
    });
};
