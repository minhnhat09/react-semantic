import React from "react";
import { FieldArray, Field } from "redux-form";
import { colors } from "../_constants";
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
            className={`ui ${
              colors[Math.floor(Math.random() * colors.length)]
            } tag label`}
            onClick={() => fields.remove(index)}
          >
            {fields.get(index)}
          </i>
        ))}
        {error && <li className="error">{error}</li>}
      </div>
    );
  };

  renderSelect = props => {
    const { input, label, meta, selectOptions } = props;
    console.log(props);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select multiple="" className="ui dropdown" {...input}>
          <option value="">Select {label}</option>
          {selectOptions.map(o => {
            return (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  };

  renderDoubleSelect = props => {
    const { input, label, meta, selectOptions } = props;
    console.log(props);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div>
        <div className={className}>
          <label>{label}</label>
          <select multiple="" className="ui dropdown" {...input}>
            <option value="">Select {label}</option>
            {selectOptions.map(o => {
              return (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              );
            })}
          </select>
        </div>
        {props.input.value && (
          <Field
            key={props[props.input.value].name}
            name={props[props.input.value].name}
            component={this.renderSelect}
            label={props[props.input.value].label}
            selectOptions={props[props.input.value].selectOptions}
          />
        )}
      </div>
    );
  };

  render() {
    return this.props.formContents.formContent.map(field => {
      const { type, name, label } = field;
      switch (type) {
        case "text":
          return (
            <Field
              key={name}
              name={name}
              component={this.renderInput}
              label={label}
            />
          );
        case "select":
          return (
            <Field
              key={name}
              name={name}
              component={this.renderSelect}
              label={label}
              selectOptions={field.selectOptions}
            />
          );
        case "doubleSelect":
          return (
            <Field
              key={name}
              name={name}
              component={this.renderDoubleSelect}
              label={label}
              {...field}
              selectOptions={field.selectOptions}
            />
          );
        case "textarea":
          return (
            <Field
              key={name}
              name={name}
              component={this.renderTextArea}
              label={label}
            />
          );
        case "tag":
          return (
            <FieldArray
              key={name}
              name={name}
              component={this.renderTags}
              label={label}
            />
          );
        default:
          return <div />;
      }
    });
  }
}

export default FormComponent;
