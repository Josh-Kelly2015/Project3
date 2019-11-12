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

// export const getUser = async users => {
//   try {
//         const response = await axios
//             .get("users/user", {
//                 headers: { Authorization: ` ${this.getToken()}` }
//             });
//         console.log(response);
//         return response.data;
//     }
//     catch (err) {
//         console.log(err);
//     }
// };
