import React from "react";
import { Link } from "react-router-dom";
class ProjectList extends React.Component {
  render() {
    return (
      <div>
        ProjectList
        <div style={{ textAlign: "right" }}>
          <Link to="/projects/new" className="ui button primary">
            Create Project
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectList;
