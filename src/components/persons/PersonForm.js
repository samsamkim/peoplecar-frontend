import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PersonForm extends React.Component {
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="text-danger">
          <div className="header">{error} </div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  closeEdit = (e) => {
    e.preventDefault();
    this.props.closeEditClicked('default');
  }

  render() {
    const createBtn = this.props.form === 'create';

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="first_name" component={this.renderInput} label="First Name" />
        <div className="form-group">
          <Field name="last_name" component={this.renderInput} label="Last Name"  />
        </div>
        <div className="form-group">
          <Field name="email" component={this.renderInput} label="Email" />
        </div>
        {createBtn ? (
          <button className="btn btn-primary ">Add Person</button>
        ) : (
          <div>
            <button className="btn btn-info">Update</button>
            <button className="btn btn-secondary" onClick={this.closeEdit}>Close</button>
          </div>
        )}
      </form>
    );
  }

};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.first_name) {
     errors.first_name = 'You must enter a first name';
  }

  if(!formValues.last_name) {
    errors.last_name = 'You must enter a last name';
  }

  if(!formValues.email) {
    errors.email = 'You must enter a valid email';
  }

  return errors;
};

export default reduxForm({
  form: 'personForm',
  validate
})(PersonForm);