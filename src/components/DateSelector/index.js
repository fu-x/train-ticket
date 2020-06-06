import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import handleDate from '../../common/handleDate'

import Header from '../Header'
import Month from './Month'
import './DateSelector.css'

export default function DateSelector(props) {
  const { isShow, onBack, onSelect } = props;
  // 获取当前三个月开始时间
  const startTimeList = [];
  const currentTime = new Date(handleDate());
  currentTime.setDate(1);
  startTimeList.push(currentTime.getTime());
  currentTime.setMonth(currentTime.getMonth() + 1);
  startTimeList.push(currentTime.getTime());
  currentTime.setMonth(currentTime.getMonth() + 1);
  startTimeList.push(currentTime.getTime());
  
  return (
    <div className={classnames("date-selector", {hidden: !isShow})}>
      <Header title="日期选择" onBack={onBack} />
      <div className="selector-container">
        {
          startTimeList.map(month => <Month key={month} onSelect={onSelect} startTime={month} onBack={onBack} />)
        }
      </div>
    </div>
  )
};

DateSelector.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

