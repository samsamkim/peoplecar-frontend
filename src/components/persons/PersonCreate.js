import React from 'react';
import { connect } from 'react-redux';
import { createPerson } from '../../actions';
import PersonForm from './PersonForm';

class PersonCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createPerson(formValues);
  }

  render() {
    return (
      <div>
        <h3 className="pb-3">Create an Owner</h3>
        <PersonForm
          form="create"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }

};

export default connect(null, {createPerson})(PersonCreate);