import React from 'react';
import PersonList from './PersonList';
import Header from './Header';
import CreateForms from './CreateForms';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <CreateForms />
      <PersonList />
    </div>
  );
};

export default App;