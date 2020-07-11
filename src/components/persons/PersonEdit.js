import React from 'react';
import { connect } from 'react-redux';
import { editPerson, fetchPerson } from '../../actions';
import PersonForm from './PersonForm';

class PersonEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPerson(this.props.id)
  }

  onEditSubmit = formValues => {
    this.props.editPerson(this.props.id, formValues);
  };

  closeEditClicked = () => {
    this.props.setToDefaultShow()
  }

  render() {
    return (
      <div>
        <PersonForm
          closeEditClicked = {this.closeEditClicked}
          form={'edit-' + this.props.id}
          initialValues={this.props.person}
          onSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { person: state.persons[ownProps.id] }
};

export default connect(mapStateToProps, { fetchPerson, editPerson })(PersonEdit);