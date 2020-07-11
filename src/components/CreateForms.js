import React from 'react';
import CarCreate from './cars/CarCreate';
import PersonCreate from './persons/PersonCreate';

class CreateForms extends React.Component {

  render(){
    return (
      <div>
        <PersonCreate />
        <CarCreate />
      </div>
    )
  }

};

export default CreateForms;