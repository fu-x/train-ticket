import React, { memo } from 'react'
import PropTypes from 'prop-types'
import CitySection from './CitySection'
import AlphaIndex from './AlphaIndex'

// 字母表
const alphaBet = Array.from(new Array(26), (el, index) => String.fromCharCode(65 + index));

// 城市列表
function CityList(props) {
  const { onSelect, cityData, toAlpha } = props;
  return (
    <div className='city-list'>
      {/* 城市列表 */}
      <div className='city-cate'>
        {
          cityData.map(item => {
            return <CitySection onSelect={onSelect} cities={item.lists} title={item.title} key={item.title} />
          })
        }
      </div>
      {/* 字母列表 */}
      <div className='city-index'>
        {
          alphaBet.map(item => {
            return <AlphaIndex key={item} alpha={item} selectIndex={toAlpha} />
          })
        }
      </div>
    </div>
  )
}

CityList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  cityData: PropTypes.array.isRequired,
}
export default memo(CityList)

