import React, { Component } from "react";
import API from "../../utils/API";
class ProjectList extends Component {
  state = {
    project: []
  };
  componentDidMount() {
    this.loadProjects();
  }
  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container mb-4">
        <div className="row">
          {this.state.project.map(project => (
            <div className="col-2 employees" key={project._id} id={project._id}>
              {project.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectList;
