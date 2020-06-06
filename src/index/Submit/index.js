import React, { memo } from 'react'
import './submit.css'

function Submit(props) {
  return (
    <div className="submit">
      <button className="submit-btn" type="submit">搜索</button>
    </div>
  )
};

export default memo(Submit);
