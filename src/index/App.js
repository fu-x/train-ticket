import React, { useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  showCitySelector,
  hideCitySelector,
  exchangeFromTo,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from './actions'

import './App.css'

// 加载组件
import DepartDate from './DepartDate'
import HighSpeed from './HighSpeed'
import Journey from './Journey'
import Submit from './Submit'
import { Header, CitySelector, DateSelector } from '../components'

function App(props) {
  // 返回上一页
  const onBack = useCallback(() => {
    window.history.back();
  }, [])
  // 获取store数据或状态
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    isDateSelectorVisible,
    highSpeed
  } = props.state
  // journey方法
  const journeyCBs = useMemo(() => {
    return bindActionCreators({
      showCitySelector,
      exchangeFromTo
    }, props.dispatch)
  }, []);
  // citySeletor方法
  const citySeletorCBs = useMemo(() => {
    return bindActionCreators({
      onBack: hideCitySelector,
      fetchCityData,
      onSelect: setSelectedCity
    }, props.dispatch)
  }, [])
  // departDate方法
  const departDateCbs = useMemo(() => {
    return bindActionCreators({
      showDateSelector: showDateSelector
    }, props.dispatch)
  })
  // dateSelector方法
  const dateSelectorCBs = useMemo(() => {
    return bindActionCreators({
      onBack: hideDateSelector,
      onSelect: setDepartDate,
    }, props.dispatch)
  })
  // highSpeed方法
  const highSpeedCBs = useMemo(() => {
    return bindActionCreators({
      toggle: toggleHighSpeed
    }, props.dispatch)
  })
  return (
    <div>
      <div className='app-header'>
        <Header title='火车票' onBack={onBack}></Header>
      </div>
      <form action="./query.html">
        <Journey {...journeyCBs} from={from} to={to}></Journey>
        <DepartDate time={departDate} {...departDateCbs}></DepartDate>
        <HighSpeed {...highSpeedCBs} highSpeed={highSpeed}></HighSpeed>
        <Submit></Submit>
      </form>
      <CitySelector 
        isShow={isCitySelectorVisible} 
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySeletorCBs}
      />
      <DateSelector 
        isShow={isDateSelectorVisible}
        {...dateSelectorCBs}
      />
    </div>
  )
};

export default connect(
  function mapStateToProps(state){
    return {
      state
    }
  },
  function mapDispatchToProps(dispatch){
    return {
      dispatch
    }
  }
)(App);

