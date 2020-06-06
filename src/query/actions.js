import { ORDER_DEPART, ORDER_DURATION } from "./constant";
import handleDate from "../common/handleDate";

export const SET_FROM = 'SET_FROM';
export const SET_TO = 'SET_TO';
export const SET_DEPART_DATE = 'SET_DEPART_DATE';
export const SET_HIGH_SPEED = 'SET_HIGH_SPEED';
export const SET_TRAIN_LIST = 'SET_TRAIN_LIST';
export const SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const SET_ONLY_TICKETS = 'SET_ONLY_TICKETS';
export const SET_TICKET_TYPES = 'SET_TICKET_TYPES';
export const SET_CHECKED_TICKET_TYPES = 'SET_CHECKED_TICKET_TYPES';
export const SET_TRAIN_TYPES = 'SET_TRAIN_TYPES';
export const SET_CHECKED_TRAIN_TYPES = 'SET_CHECKED_TRAIN_TYPES';
export const SET_DEPART_STATIONS = 'SET_DEPART_STATIONS';
export const SET_CHECKED_DEPART_STATIONS = 'SET_CHECKED_DEPART_STATIONS';
export const SET_ARRIVE_STATIONS = 'SET_ARRIVE_STATIONS';
export const SET_CHECKED_ARRIVE_STATIONS = 'SET_CHECKED_ARRIVE_STATIONS';
export const SET_DEPART_TIME_START = 'SET_DEPART_TIME_START';
export const SET_DEPART_TIME_END = 'SET_DEPART_TIME_END';
export const SET_ARRIVE_TIME_START = 'SET_ARRIVE_TIME_START';
export const SET_ARRIVE_TIME_END = 'SET_ARRIVE_TIME_END';
export const SET_IS_FILTERS_VISIBLE = 'SET_IS_FILTERS_VISIBLE';
export const SET_SEARCH_PARSED = 'SET_SEARCH_PARSED';

export function setFrom(from) {
  return {
    type: SET_FROM,
    payload:from
  }
}
export function setTo(to) {
  return {
    type: SET_TO,
    payload:to
  }
}
export function setDepartDate(departDate) {
  return {
    type: SET_DEPART_DATE,
    payload:departDate
  }
}
export function setHighSpeed(highSpeed) {
  return {
    type: SET_HIGH_SPEED,
    payload:highSpeed
  }
}
export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch({
      type: SET_HIGH_SPEED,
      payload: !highSpeed
    })
  }
}
export function setTrainList(trainList) {
  return {
    type: SET_TRAIN_LIST,
    payload:trainList
  }
}
export function setOrderType() {
  return (dispatch, getState) => {
    const { orderType } = getState();
    if (orderType === ORDER_DEPART) {
      dispatch({
        type: SET_ORDER_TYPE,
        payload: ORDER_DURATION
      })
    } else {
      dispatch({
        type: SET_ORDER_TYPE,
        payload: ORDER_DEPART
      })
    }
  }
}
export function toggleOnlyTickets() {
  return (dispatch, getState) => {
    const { onlyTickets } = getState();
    dispatch({
      type: SET_ONLY_TICKETS,
      payload: !onlyTickets
    })
  }
}
export function setTicketTypes(ticketTypes) {
  return {
    type: SET_TICKET_TYPES,
    payload:ticketTypes
  }
}
export function setCheckedTicketTypes(checkedTicketTypes) {
  return {
    type: SET_CHECKED_TICKET_TYPES,
    payload:checkedTicketTypes
  }
}
export function setTrainTypes(trainTypes) {
  return {
    type: SET_TRAIN_TYPES,
    payload:trainTypes
  }
}
export function setCheckedTrainTypes(checkedTrainTypes) {
  return {
    type: SET_CHECKED_TRAIN_TYPES,
    payload:checkedTrainTypes
  }
}
export function setDepartStations(departStations) {
  return {
    type: SET_DEPART_STATIONS,
    payload:departStations
  }
}
export function setCheckedDepartStations(checkedDepartStations) {
  return {
    type: SET_CHECKED_DEPART_STATIONS,
    payload:checkedDepartStations
  }
}
export function setArriveStations(arriveStations) {
  return {
    type: SET_ARRIVE_STATIONS,
    payload:arriveStations
  }
}
export function setCheckedArriveStations(checkedArriveStations) {
  return {
    type: SET_CHECKED_ARRIVE_STATIONS,
    payload: checkedArriveStations
  }
}
export function setDepartTimeStart(departTimeStart) {
  return {
    type: SET_DEPART_TIME_START,
    payload:departTimeStart
  }
}
export function setDepartTimeEnd(departTimeEnd) {
  return {
    type: SET_DEPART_TIME_END,
    payload:departTimeEnd
  }
}
export function setArriveTimeStart(arriveTimeStart) {
  return {
    type: SET_ARRIVE_TIME_START,
    payload:arriveTimeStart
  }
}
export function setArriveTimeEnd(arriveTimeEnd) {
  return {
    type: SET_ARRIVE_TIME_END,
    payload:arriveTimeEnd
  }
}
export function setIsFiltersVisible() {
  return (dispatch, getState) => {
    const { isFiltersVisible } = getState();
    dispatch({
      type: SET_IS_FILTERS_VISIBLE,
      payload: !isFiltersVisible
    })
  }
}
export function setSearchParsed(searchParsed) {
  return {
    type: SET_SEARCH_PARSED,
    payload:searchParsed
  }
}
// 前一天
export function prevDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();
    dispatch(setDepartDate(handleDate(departDate) + 86400 * 1000));
  }
}
// 后一天
export function nextDate() {
  return (dispatch, getState) => {
    const { departDate } = getState();
    dispatch(setDepartDate(handleDate(departDate) - 86400 * 1000));
  }
}