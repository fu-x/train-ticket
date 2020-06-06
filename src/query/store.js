import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';
import handleDate from '../common/handleDate'
import {
  ORDER_DEPART
} from './constant'

export default createStore(
  combineReducers(reducers),
  {
    from: null,   // 出发站点
    to: null,   // 到达站点
    departDate: handleDate(Date.now()),   // 触发日期
    highSpeed: false,   // 是否仅查看高动铁
    trainList: [],  // 所有列车信息
    orderType: ORDER_DEPART,  // 排序方式
    onlyTickets: false,   // 只看有票
    ticketTypes: [],  // 车票座位类型
    checkedTicketTypes: {}, // 选中的车票座位类型
    trainTypes: [], // 车次类型
    checkedTrainTypes: {}, // 选中的车次类型
    departStations: [], // 出发车站
    checkedDepartStations: {},  // 选中的出发车站
    arriveStations: [], // 到达车站
    checkArriveStations: {}, // 选中的到达车站
    departTimeStart: 0, // 出发最早时间
    departTimeEnd: 24,  // 出发最晚时间
    arriveTimeStart: 0,   // 到达最早时间
    arriveTimeEnd: 24,  // 到达最晚时间
    isFiltersVisible: false,  // 是否显示筛选窗口
    searchParsed: false   // 初始地址栏参数是否解析完成
  },
  applyMiddleware(thunk)
)
