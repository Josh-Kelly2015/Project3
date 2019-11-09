// import React, { Component } from "react";
// import API from "../../utils/API";
// class ProjectList extends Component {
//   state = {
//     projects: [],
//     employees: []
//   };
//   componentDidMount() {
//     API.getProjects()
//       .then(res => this.setState({ projects: res.data }))
//       .catch(err => console.log(err));
//     API.getEmployees()
//       .then(res => this.setState({ employees: res.data }))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div className="container-fluid">
//         <div className="container">
//           <div className="row">
//             {this.state.projects.map(project => (
//               <div key={project._id} id={project._id} className="col">
//                 {project.projectName}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default ProjectList;
