import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './HighSpeed.css'

export default function HighSpeed(props) {
  const { highSpeed, toggle } = props
  return (
    <div className="high-speed">
      <div className="high-speed-text">
        只查看高铁/动铁
      </div>
      <div onClick={() => toggle()} className="hight-speed-btn">
        <input type="hidden" value={highSpeed} name="highSpeed" />
        <div className={classnames('btn-outside', {'active-outside': highSpeed})}>
          <div className={classnames('btn-inner', {'active-inner': highSpeed})}>
          </div>
        </div>
      </div>
    </div>
  )
};

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}
