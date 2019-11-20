import React from "react";
import Button from "@material-ui/core/Button";
// import API from "../../utils/API";
// const updatedProject = ({ userToAssign, getProjectId }) => {
// ---------- GET PROJECT BY ID ---------
// let id = getProjectId;
// console.log(id, userToAssign);
// API.getProject(id)
//   .then(res => {
//     console.log(`Project To Update: ${res.data}`);

//       let ProjectToUpdate = res.data;
//       // ------------ GET USER BY ID -----------
//       let id = userToAssign._id;
//       API.getUser(id)
//         .then(res => {
//           console.log(`Selected User to Update Project: ${res.data}`);
//           let UserToUpdate = res.data;

//           console.log(`User: ${UserToUpdate}, Project: ${ProjectToUpdate}`);
//           // ---- UPDATE PROJECT BY ID WITH USER BY ID ----
//           // const updatedProject = ProjectToUpdate.assignedUsers.push(UserToUpdate);
//           // console.log(updatedProject);
//           // API.updateProject(projectData)
//           // .then( res => console.log(res.data))
//           // .catch(err => console.log(err));
//         })
//         .catch(err => console.log(err));
// })
// .catch(err => console.log(err));
// };
const AssignUserButton = ({ projectId }) => {
  return <Button onClick={projectId}>Add to Project</Button>;
};

export default AssignUserButton;
