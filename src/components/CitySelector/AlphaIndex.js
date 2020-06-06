import React, { memo } from 'react'
import PropTypes from 'prop-types'
function AlphaIndex(props) {
  const { selectIndex, alpha } = props;
  return (
    <i className='city-index-item' onClick={() => selectIndex(alpha)}>
      {alpha}
    </i>
  )
};
AlphaIndex.propTypes = {
  selectIndex: PropTypes.func.isRequired,
  alpha: PropTypes.string.isRequired
}
export default memo(AlphaIndex)