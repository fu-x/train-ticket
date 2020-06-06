export const SET_FROM = 'SET_FROM'
export const SET_TO = 'SET_TO'
export const SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE'
export const SET_CURRENT_SELECTING_FROM_CITY = 'SET_CURRENT_SELECTING_FROM_CITY'
export const SET_CITY_DATA = 'SET_CITY_DATA'
export const SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA'
export const SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE'
export const SET_HIGH_SPEED = 'SET_HIGH_SPEED'
export const SET_DEPART_DATE = 'SET_DEPART_DATE'

// 设置from
export function setFrom(from){
  return {
    type: SET_FROM,
    payload: from,
  }
}
// 设置to
export function setTo(to){
  return {
    type: SET_TO,
    payload: to,
  }
}
// 改变当前是否正在加载的状态
export function setIsLoadingCityData(isLoadingCityData){
  return {
    type: SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData,
  }
}
// 设置当前数据
export function setCityData(cityData){
  return {
    type: SET_CITY_DATA,
    payload: cityData,
  }
}
// 切换是否选择高铁动车
export function toggleHighSpeed(){
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch({
      type: SET_HIGH_SPEED,
      payload: !highSpeed
    })
  }
}
// 显示城市选择器
export function showCitySelector(currentSelectingLeftCity){
  return dispatch => {
    dispatch({
      type: SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    })
    dispatch({
      type: SET_CURRENT_SELECTING_FROM_CITY,
      payload: currentSelectingLeftCity
    })
  }
}
// 隐藏城市选择器
export function hideCitySelector(){
  return {
    type: SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false,
  }
}
// 设置当前选择的城市
export function setSelectedCity(city){
  return (dispatch, getState) => {
    const { currentSelectingFromCity} = getState();
    if(currentSelectingFromCity) {
      dispatch(setFrom(city));
    }else{
      dispatch(setTo(city));
    }
    dispatch(hideCitySelector());
  }
}
// 显示时间选择器
export function showDateSelector(){
  return {
    type: SET_IS_DATE_SELECTOR_VISIBLE,
    payload: true
  }
}
// 隐藏时间选择器
export function hideDateSelector(){
  return {
    type: SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false
  }
}
export function setDepartDate(departDate){
  return {
    type: SET_DEPART_DATE,
    payload: departDate
  }
}
// 交换from和to 
export function exchangeFromTo(){
  return (dispatch, getState) => {
    const { from, to } = getState();
    dispatch(setFrom(to));
    dispatch(setTo(from));
  }
}
// 请求citydata
export function fetchCityData(){
  return (dispatch, getState) => {
    const { isLoadingCityData } = getState();
    if(isLoadingCityData) return;
    const cache = JSON.parse(localStorage.getItem('cityData') || '{}');
    if(cache.expires >= Date.now()) {
      dispatch(setCityData(cache.data.message.city));
    };
    dispatch(setIsLoadingCityData(true));
    fetch('/rest/city?_' + Date.now())
      .then(res => res.json())
      .then(data => {
        dispatch(setCityData(data.message.city));
        dispatch(setIsLoadingCityData(false));
        localStorage.setItem('cityData', JSON.stringify({
          expires: Date.now() + 60 * 60 * 1000,
          data: data
        }))
      })
      .catch(() => {
        dispatch(setIsLoadingCityData(false));
      }) 
  }
}