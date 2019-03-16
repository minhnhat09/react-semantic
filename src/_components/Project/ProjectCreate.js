import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../_actions';
import ProjectForm from './ProjectForm';

class ProjectCreate extends React.Component {
	onSubmit = formValues => {
		console.log(formValues);
		this.props.createProject(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Project</h3>
				<ProjectForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createProject }
)(ProjectCreate);
