import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateActivePet } from '../actions'
import { combineReducers } from '../reducers/index'
import './App.css';

class Pet extends Component {
  render() {
    return (
      <div>
        Pets pets pets
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pet: state.activePet
  }
}

export default connect(mapStateToProps)(Pet);