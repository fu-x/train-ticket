import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './DepartDate.css'
import handleDate from '../../common/handleDate'

function DepartDate(props) {

  const { time, showDateSelector } = props;
  const HDTime = handleDate(time);  // 获取这一天的时间戳
  const dateStr = useMemo(() => {   // 获取本地时间字符串
    return time.toLocaleDateString();
  }, [HDTime]);
  const isToday = HDTime === handleDate();  // 判断当前时间是否为今天
  const week = '星期' + ['日', '一', '二', '三', '四', '五', '六'][time.getDay()]; // 获取星期

  return (
    <div className='depart-date' onClick={() => showDateSelector()}>
      <input type="hidden" name="date" value={dateStr}/>
      {dateStr}
      <span className='depart-week'>{week + (isToday ? '(本周)' : '')}</span>
    </div>
  )
};

DepartDate.propTypes = {
  time: PropTypes.object.isRequired,
  showDateSelector: PropTypes.func.isRequired
}

export default DepartDate