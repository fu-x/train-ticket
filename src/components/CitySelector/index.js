import React, { useState, useMemo, useEffect, memo, useCallback } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import CityList from './CityList'
import Suggest from './Suggest'
import './CitySelector.css'

function CitySelector(props) {
  const {
    isShow,
    cityData,
    isLoading,
    onBack,
    fetchCityData,
    onSelect
  } = props

  // 搜索栏关键字
  const [searchKey, setSearchKey] = useState('');
  const key = useMemo(()=>searchKey.trim(), [searchKey]); 
  
  // 跳转到点击字母方法
  const toAlpha = useCallback(alpha => {
    console.log(alpha);
    if(alpha === 'I') alpha = 'H';
    if(alpha === 'O') alpha = 'N';
    if(alpha === 'U' || alpha === 'V') alpha = 'T';
    document.querySelector(`[data-cache='${alpha}']`).scrollIntoView();
  }, [])

  // 请求数据
  useEffect(() => {
    if(!isShow || isLoading || cityData) return;
    fetchCityData();
  }, [isShow, isLoading])

  // 处理城市列表
  const outputCityList = () => {
    if(isLoading) return <div>LOADING...</div>
    if(cityData) return (
      <CityList onSelect={onSelect} cityData={cityData} toAlpha={toAlpha}/>
    )
  }
  return (
    <div className={classnames('city-selector', {hidden: !isShow})}>
      {/* 搜索框 */}
      <div className="city-search">
        <div className="search-back" onClick={() => onBack()}>
            <svg width="42" height="42">
                <polyline
                    points="25,13 16,21 25,29"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none"
                />
            </svg>
        </div>
        <div className="search-input-wrapper">
            <input
                type="text"
                value={searchKey}
                className="search-input"
                placeholder="请输入城市或车站"
                onChange={e => setSearchKey(e.target.value)}
            />
        </div>
        <i
            onClick={() => setSearchKey('')}
            className={classnames('search-clean', {
                hidden: key.length === 0,
            })}>
            &#xf063;
        </i>
      </div>
      {/* 搜索内容 */}
      {
        Boolean(key) && (
          <Suggest searchKey={key} onSelect={onSelect} />
        )
      }
      {/* 所有城市列表 */}
      {outputCityList()}
    </div>
  )
};

CitySelector.propTypes = {
  isShow: PropTypes.bool.isRequired,
  cityData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default memo(CitySelector);