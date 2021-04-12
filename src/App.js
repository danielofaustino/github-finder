import React, { Component } from 'react';

import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';


export class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <UserItem />
      </React.Fragment>
      );
  }
}

export default App;
