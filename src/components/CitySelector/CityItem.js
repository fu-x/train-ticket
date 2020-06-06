import React, { memo } from 'react'
import PropTypes from 'prop-types'

function CityItem(props) {
  const { name, onSelect } = props;
  return (
    <li className='city-li' onClick={() => onSelect(name)}>
      { name }
    </li>
  )
};
CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}
export default memo(CityItem)
