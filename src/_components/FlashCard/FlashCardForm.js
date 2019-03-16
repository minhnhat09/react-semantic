import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import FormComponent from '../FormComponent';
import { addFlashCardForm } from '../../_helpers';
// import {Editor, EditorState} from 'draft-js';
class FlashCardForm extends React.Component {
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
				<FormComponent formContents={addFlashCardForm} />
				<button className="ui button primary">Submit</button>
				<Link to={`/flash-cards`} className="ui button negative">
					Cancel
				</Link>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};
	if (!formValues.front) {
		errors.front = 'You must enter the front of the card';
	}
	if (!formValues.back) {
		errors.back = 'You must enter the back of the card';
	}
	if (!formValues.category) {
		errors.category = 'You must enter category';
	}

	return errors;
};

export default reduxForm({
	form: 'projectForm',
	validate,
})(FlashCardForm);
