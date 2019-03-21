import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import FormComponent from '../FormComponent';
import { addResourceForm } from '../../_helpers';
// import {Editor, EditorState} from 'draft-js';
class ResourceForm extends React.Component {
	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	renderField = ({ input, label, type, meta: { touched, error } }) => (
		<div>
			<label>{label}</label>
			<div>
				<input {...input} type={type} placeholder={label} />
				{touched && error && <span>{error}</span>}
			</div>
		</div>
	);

	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
				<FormComponent formContents={addResourceForm} />
				<button className="ui button primary">Submit</button>
				<Link to={`/resources`} className="ui button negative">
					Cancel
				</Link>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.name) {
		errors.name = 'You must enter a resource name';
	}

	return errors;
};

export default reduxForm({
	form: 'resourceForm',
	validate,
})(ResourceForm);
