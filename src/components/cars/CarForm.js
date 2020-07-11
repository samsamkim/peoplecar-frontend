import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { fetchPersons } from '../../actions';
import { connect } from 'react-redux';


class CarForm extends React.Component {
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
    this.props.closeEditClickedCar('default');
  }

  render() {
    const createBtn = this.props.form === 'createCar';

    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="model" component={this.renderInput} label="Model" />
        <Field name="make" component={this.renderInput} label="Make"  />
        <Field name="year" component={this.renderInput} label="Year" />
        <Field name="price" component={this.renderInput} label="Price" />
        <Field name="person_id" label="person" component="select" >
          {this.props.persons.map(person => {
            return (
              <option key={person.id + 'list'} value={person.id}>{person.first_name + ' ' + person.last_name}</option>
            )
          })}
        </Field>

        {createBtn ? (
          <button className="btn btn-primary ">Add Car</button>
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

const mapStateToProps = (state) => {
  return {
    persons: Object.values(state.persons)
  }
};

const validate = (formValues) => {
  const errors = {};

  if(!formValues.model) {
     errors.model = 'You must enter the model of the car';
  }

  if(!formValues.make) {
    errors.make = 'You must enter the make of the car';
  }

  if(!formValues.year) {
    errors.make = 'You must enter a year';
  }

  if(!formValues.price) {
    errors.price = 'You must enter a price';
  }

  return errors;
};

CarForm = reduxForm({
  form: 'carForm',
})(CarForm);

export default connect(mapStateToProps, { fetchPersons })(CarForm);