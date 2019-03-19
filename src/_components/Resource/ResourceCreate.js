import React from 'react';
import { connect } from 'react-redux';
import { createResource } from '../../_actions';
import ResourceForm from './ResourceForm';

class ResourceCreate extends React.Component {
	onSubmit = formValues => {
		this.props.createResource(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Resource</h3>
				<ResourceForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createResource }
)(ResourceCreate);
