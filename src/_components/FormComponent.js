import React from 'react';
import { FieldArray, Field } from 'redux-form';
// import {Editor, EditorState} from 'draft-js';
class FormComponent extends React.Component {

	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderTextArea = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<textarea {...input} rows="10" />
				{this.renderError(meta)}
			</div>
		);
	};

	renderCheckbox = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		console.log(input);
		return (
			<div className={className}>
				<label>{label}</label>
				<div>
					<input className="ui checkbox" type="checkbox" {...input} />
					<label>{label}</label>
				</div>
			</div>
		);
	};

	renderSelect = ({ input, label, meta, selectOptions }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<select multiple="" className="ui dropdown" {...input}>
					<option value="">Select Category</option>
					{selectOptions.map(o => {
						return (
							<option key={o.value} value={o.value}>
								{o.label}
							</option>
						);
					})}
				</select>
				<div />
			</div>
		);
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

	renderTags = ({ fields, meta: { error } }) => {
		return (
			<div>
				<div className="field">
					<label>Add tag</label>
					<input
						onKeyPress={e => {
							if (e.key === 'Enter') {
								e.preventDefault();
								fields.push(e.target.value);
								e.target.value = '';
							}
						}}
					/>
				</div>
				{fields.map((tag, index) => (
					<i key={index} className="ui red tag label" onClick={() => fields.remove(index)}>
						{fields.get(index)}
					</i>
				))}
				{error && <li className="error">{error}</li>}
			</div>
		);
	};

	render() {
		return this.props.formContents.formContent.map(field => {
			switch (field.type) {
				case 'text':
					return (
						<Field key={field.name} name={field.name} component={this.renderInput} label={field.label} />
					);
				case 'select':
					return (
						<Field
							key={field.name}
							name={field.name}
							component={this.renderSelect}
							label={field.label}
							selectOptions={field.selectOptions}
						/>
					);
				case 'textarea':
					return (
						<Field key={field.name} name={field.name} component={this.renderTextArea} label={field.label} />
					);
				case 'tag':
					return (
						<FieldArray
							key={field.name}
							name={field.name}
							component={this.renderTags}
							label={field.label}
						/>
					);
				default:
					break;
			}
		});
	}
}

export default FormComponent;
