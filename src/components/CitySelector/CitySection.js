import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CityItem from './CityItem';

function CitySection(props) {
  const { title, cities = [], onSelect } = props;
  return (
    <ul className='city-ul'>
      <li className='city-li' key={title} data-cache={title}>
        {title}
      </li>
      { cities.map(item => {
        return <CityItem name={item} onSelect={onSelect} key={item}></CityItem>
      })}
    </ul>
  )
};
CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array,
  onSelect: PropTypes.func.isRequired
}
export default memo(CitySection)