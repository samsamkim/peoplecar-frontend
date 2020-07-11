import React from 'react';
import PersonEdit from './PersonEdit'
import PersonDelete from './PersonDelete';
import { connect } from 'react-redux';
import { deletePerson } from '../../actions';
import CarEdit from '../cars/CarEdit';

class PersonCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      renderedComponent: 'default',
      renderedComponentCar: 'default'
    };  
  }
  
  editClicked = () => {
    this.setState({renderedComponent: 'edit'});
  }

  editClickedCar = () => {
    this.setState({renderedComponentCar: 'edit'});
  }

  deleteClickedCar = () => {
    this.props.deleteCar(this.props.id);
  }

  setToDefaultShow = () => {
    this.setState({renderedComponent: 'default'});
  }

  deleteClicked = () => {
    this.props.deletePerson(this.props.id);
  }

  renderCars() {
    if (!this.props.cars) {
      return
    }
    return this.props.cars.map(car => {
      if (this.state.renderedComponentCar === 'edit') {
        return (
          <div>
            <CarEdit renderedComponentCar="edit" setToDefaultShowCar={this.setToDefaultShowCar} id={car.id} />
          </div>
        )
      } else {

        return (
          <div className="container-fluid card py-2 my-2" key={car.id + this.props.last_name + this.props.id}>
            <div className="row">
              <div className="col-8">
                <div className="">
                  {car.year}
                  {car.make}
                  {car.model}
                </div>
                <div className="">{car.price}</div>
              </div>
              <div className="col float-right">
                <button onClick={this.editClickedCar} className="btn btn-info mx-2"> Edit </button>

                edit del</div>
            </div>
          </div>
        )
      }
    })
  };

  renderComponent() {
    switch(this.state.renderedComponent) {
    case "edit":
      return <PersonEdit renderedComponent="edit" setToDefaultShow={this.setToDefaultShow} id={this.props.id}/>
    case "delete":
      return <PersonDelete />
    case "default":
      return (
        <div className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-10">
                <div className="font-weight-bold"> {this.props.first_name} {this.props.last_name} </div>
                <div className=""> {this.props.email} </div>
              </div>
              <div className="col">
                <div className="row float-right">
                  <button onClick={this.editClicked} className="btn btn-info mx-2"> Edit </button>
                  <button onClick={this.deleteClicked} className="btn btn-danger"> Delete </button>
                </div>
              </div>
            </div>
          </div>
          <div>{this.renderCars()} </div>
        </div>
      )
    }
  };

  render() {
    return (
      <div className="card p-3 my-3">
        {this.renderComponent()}
      </div>
    )
  }
};

export default connect(null, {deletePerson})(PersonCard);

