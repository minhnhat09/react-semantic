import React from 'react';
import { connect } from 'react-redux';
import { fetchResource, editResource } from '../../_actions';
import ResourceForm from './ResourceForm';
import _ from 'lodash';
class ResourceEdit extends React.Component {
	componentDidMount() {
		this.props.fetchResource(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editResource(this.props.match.params.id, formValues);
	};

	render() {
    console.log(this.props.resource);
		if (!this.props.resource) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit a Resource</h3>
				<ResourceForm
					initialValues={_.pick(
						this.props.resource,
						'name',
						'description',
						'content',
						'url',
						'tags',
						'category'
					)}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { resource: state.resources[ownProps.match.params.id] };
};

export default connect(
	mapStateToProps,
	{ editResource, fetchResource }
)(ResourceEdit);
