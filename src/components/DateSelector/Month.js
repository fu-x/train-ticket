import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function Month(props) {
  const { startTime, onSelect, onBack } = props;
  // 存储当前月份表（前空格 + 每一天 + 后空格）
  let dateList = [];
  const startDate = new Date(startTime);
  const currentDate = new Date(startTime);
  // 获取该月的每一天
  while(currentDate.getMonth() === startDate.getMonth()){
    dateList.push(currentDate.getDate());
    currentDate.setDate(currentDate.getDate() + 1);
  }
  // 获取后空格
  currentDate.setDate(currentDate.getDate() - 1)
  const lastBlocks = currentDate.getDay() ? 7 - currentDate.getDay() : 0;
  dateList = dateList.concat(new Array(lastBlocks).fill(null));
  // 获取前空格
  const startBlocks = startDate.getDay() ? startDate.getDay() - 1 : 6;
  dateList = new Array(startBlocks).fill(null).concat(dateList);
  // 获取周
  const weeks = [];
  while(dateList.length){
    weeks.push(dateList.splice(0, 7));
  }
  const nowDate = new Date();
  const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  function selectDate(day) {
    if((day < nowDate.getDate() && startTime < nowDate.getTime()) || !day) return;
    startDate.setDate(day);
    onSelect(startDate);
    onBack();
  }
  return (
    <div className="month-table">
      <div className="table-date">
        {startDate.getFullYear() + '年' + (startDate.getMonth() + 1) + '月'}
      </div>
      <div className="table">
        <div className="table-head">
          <div className="table-row">
          {
            days.map((day, index) => 
            <div 
              key={day} 
              className={classnames('table-cell', {'weekend': index >= 5})}
            >
              {day}
            </div>)
          }
          </div>
        </div>
        <div className="table-body">
          {
            weeks.map((week, index) => 
              <div key={index} className="table-row">
                {
                  week.map((day, index) => 
                    <div
                      onClick= {() => selectDate(day)}
                      key={index}
                      className={
                        classnames('table-cell', {
                          'weekend':  index >= 5, 
                          'past-date': (day < nowDate.getDate() && 
                            startTime <= nowDate.getTime()) || !day
                        })
                      }
                    >{day}</div>)
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
};

Month.propTypes = {
  startTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
}
