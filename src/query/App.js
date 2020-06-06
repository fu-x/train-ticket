import React from 'react'
import { connect } from 'react-redux'

import Bottom from './Bottom'
import TrainList from './TrainList'
import { DateNav } from '../components/index'
import './App.css'

function App(props) {
  return (
    <div className="query">
      <DateNav />
      <TrainList />
      <Bottom />
    </div>
  )
};

export default connect(
  function mapStateToProps(state){
    return state
  },
  function mapDispatchToProps(dispatch){
    return { dispatch }
  }
)(App);

