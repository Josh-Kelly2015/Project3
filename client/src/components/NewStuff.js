<div className="row">
  <div className="col">
    <form>
      <input
        type="text"
        name="projectName"
        value={this.state.projectName}
        onChange={this.handleNewProject}
      ></input>
    </form>
    {/* submit button to add new project */}
    <button
      className="btn btn-light"
      type="submit"
      onClick={() => {
        this.addNewProject();
      }}
    >
      Add New Project
    </button>
  </div>
  {/* form to enter new employee info */}
  <div className="col">
    <form>
      <input
        type="text"
        name="employeeName"
        value={this.state.employeeName}
        onChange={this.handleNewEmployee}
      ></input>
      <input
        type="text"
        name="email"
        value={this.state.email}
        onChange={this.handleNewEmail}
      ></input>
      <input
        type="text"
        name="rank"
        value={this.state.rank}
        onChange={this.handleNewRank}
      ></input>
    </form>
    {/* Submit button to add a new employee */}
    <button
      className="btn btn-light"
      type="submit"
      onClick={() => {
        this.addNewEmployee();
      }}
    >
      Add New Employee
    </button>
  </div>
  {/* Delete Employee using Drop Down and button */}

  <div className="col">
    {/* Drop Down Select */}
    <Select
      options={this.state.employees.map(employee => {
        return {
          value: employee._id,
          label: employee.employeeName
        };
      })}
      onChange={this.handleDeleteEmployee}
    />
    {/* Add Employee To Project Button */}
    <button
      className="btn btn-danger"
      onClick={() => {
        this.deleteEmployee();
      }}
    >
      Delete Employee
    </button>
  </div>
</div>;
