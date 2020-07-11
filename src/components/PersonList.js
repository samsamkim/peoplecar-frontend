import React from 'react';
import { connect } from 'react-redux';
import { fetchPersons } from '../actions';
import PersonCard from './persons/PersonCard';

class PersonList extends React.Component {
  componentDidMount() {
    this.props.fetchPersons();
  }

  renderList() {
    return this.props.persons.map(person => {
      return (
        <PersonCard
          key={person.id}
          id={person.id}
          cars={person.cars}
          first_name={person.first_name}
          last_name={person.last_name}
          email={person.email}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    persons: Object.values(state.persons)
  }
};

export default connect(mapStateToProps, { fetchPersons })(PersonList);