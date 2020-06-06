import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers(reducers),
  {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false, // 是否显示城市选择器
    currentSelectingFromCity: false, // 当前是否选择from城市
    cityData: null, // 城市数据
    isLoadingCityData: false, // 当前是否正在加载城市数据
    isDateSelectorVisible: false, // 是否显示日期选择器
    highSpeed: false, // 是否选择高铁动车
    departDate: new Date()  // 出发日期
  },
  applyMiddleware(thunk)
)
