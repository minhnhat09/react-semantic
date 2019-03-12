import React from "react";
import { FieldArray, Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
class BlogForm extends React.Component {
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
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderTextArea = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} rows="10" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderCheckbox = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
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

  renderSelect = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select multiple="" className="ui dropdown" {...input}>
          <option value="">Select Category</option>
          <option value="algo">Algorithm and Data structure</option>
          <option value="dataStructure">Data structure</option>
          <option value="seniorDev">Senior Dev</option>
          <option value="architecture">Architecture</option>
        </select>
        <div />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
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

  renderTags = ({ fields, meta: { error } }) => {
    return (
      <div>
        <div className="field">
          <label>Add tag</label>
          <input
            onKeyPress={e => {
              if (e.key === "Enter") {
                e.preventDefault();
                fields.push(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
        {fields.map((tag, index) => (
          <i
            key={index}
            className="ui red tag label"
            onClick={() => fields.remove(index)}
          >
            {fields.get(index)}
          </i>
        ))}
        {error && <li className="error">{error}</li>}
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="category"
          component={this.renderSelect}
          label="Enter Category"
        />
        <FieldArray
          name="tags"
          component={this.renderTags}
          label="Enter Tags"
        />
        <Field
          name="content"
          component={this.renderTextArea}
          label="Enter Content"
        />

        <button className="ui button primary">Submit</button>
        <Link to={`/blogs`} className="ui button negative">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  return errors;
};

export default reduxForm({
  form: "blogForm",
  validate
})(BlogForm);
