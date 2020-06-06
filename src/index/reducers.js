import { 
  SET_FROM,
  SET_TO,
  SET_IS_CITY_SELECTOR_VISIBLE,
  SET_CURRENT_SELECTING_FROM_CITY,
  SET_CITY_DATA,
  SET_IS_LOADING_CITY_DATA,
  SET_IS_DATE_SELECTOR_VISIBLE,
  SET_HIGH_SPEED,
  SET_DEPART_DATE
  } from './actions'

export default {
  from (state = '北京', action) {
    const {type, payload } = action;
    switch(type){
      case SET_FROM:
        return payload;
      default:
        return state;
    }
  },
  to (state = '上海', action) {
    const {type, payload } = action;
    switch(type){
      case SET_TO:
        return payload;
      default:
        return state;
    }
  },
  isCitySelectorVisible (state = false, action) {
    const {type, payload } = action;
    switch(type){
      case SET_IS_CITY_SELECTOR_VISIBLE:
        return payload;
      default:
        return state;
    }
  },
  currentSelectingFromCity (state = false, action) {
    const {type, payload } = action;
    switch(type){
      case SET_CURRENT_SELECTING_FROM_CITY:
        return payload;
      default:
        return state;
    }
  },
  cityData (state = null, action) {
    const {type, payload } = action;
    switch(type){
      case SET_CITY_DATA:
        return payload;
      default:
        return state;
    }
  },
  isLoadingCityData (state = false, action) {
    const {type, payload } = action;
    switch(type){
      case SET_IS_LOADING_CITY_DATA:
        return payload;
      default:
        return state;
    }
  },
  isDateSelectorVisible (state = false, action) {
    const {type, payload } = action;
    switch(type){
      case SET_IS_DATE_SELECTOR_VISIBLE:
        return payload;
      default:
        return state;
    }
  },
  highSpeed (state = false, action) {
    const {type, payload } = action;
    switch(type){
      case SET_HIGH_SPEED:
        return payload;
      default:
        return state;
    }
  },
  departDate (state = false, action) {
    const { type, payload } = action;
    switch(type){
      case SET_DEPART_DATE:
        return payload;
      default:
        return state;
    }
  }
};