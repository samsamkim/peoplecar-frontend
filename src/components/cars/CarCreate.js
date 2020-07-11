import React from 'react';
import { connect } from 'react-redux';
import { createCar } from '../../actions';
import CarForm from './CarForm';

class CarCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createCar(formValues);
  }

  render() {
    return (
      <div>
        <h3 className="pb-3">Create a Car</h3>
        <CarForm
          key={this.props.id + 'car'}
          form="createCar"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }

};

export default connect(null, {createCar})(CarCreate);