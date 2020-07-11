import React from 'react';
import { connect } from 'react-redux';
import { editCar, fetchCar, fetchCars } from '../../actions';
import CarForm from './CarForm';

class CarEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCar(this.props.id);
    this.props.fetchCars();
  }

  onEditSubmit = formValues => {
    this.props.editCar(this.props.id, formValues);
  };

  closeEditClickedCar = () => {
    this.props.setToDefaultShowCar()
  }

  render() {
    return (
      <div>
        <CarForm
          closeEditClicked = {this.closeEditClicked}
          form={'edit-car-' + this.props.id}
          initialValues={this.props.car}
          onSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  return { car: state.cars[ownProps.id], cars: Object.values(state.cars) }
};

export default connect(mapStateToProps, { fetchCar, editCar, fetchCars })(CarEdit);