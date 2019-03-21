import React from 'react';
import { connect } from 'react-redux';
import { fetchProject, editProject } from '../../_actions';
import ProjectForm from './ProjectForm';
import _ from 'lodash';
class ProjectEdit extends React.Component {
	componentDidMount() {
		this.props.fetchProject(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editProject(this.props.match.params.id, formValues);
	};

	render() {
		console.log(this.props.project);
		if (!this.props.project) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a Project</h3>
				<ProjectForm
					initialValues={_.pick(this.props.project, 'name', 'description', 'tags', 'category')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { project: state.projects[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ editProject, fetchProject }
)(ProjectEdit);
