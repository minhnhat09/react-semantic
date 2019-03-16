import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProjects } from '../../_actions';

class ProjectList extends React.Component {
	componentDidMount() {
		this.props.fetchProjects();
	}
	render() {
		return (
			<div>
				ProjectList
				<div style={{ textAlign: 'right' }}>
					<Link to="/projects/new" className="ui button primary">
						Create Project
					</Link>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		projects: Object.values(state.projects),
	};
};

export default connect(
	mapStateToProps,
	{ fetchProjects }
)(ProjectList);
