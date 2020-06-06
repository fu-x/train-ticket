import React, { useEffect, memo, useState } from 'react'
import PropTypes from 'prop-types'
import SuggestItem from './SuggestItem'

function Suggest(props) {
  const { searchKey, onSelect } = props;
  const [result, setResult] = useState([]);
  // 请求搜索数据
  useEffect(() => {
    fetch('/rest/search?key=' + encodeURIComponent(searchKey))
      .then(res => res.json())
      .then(data => {
        if(data.searchKey === searchKey){
          setResult(data.message);
        }
      }) 
  }, [searchKey])
  return (
    <div className='city-suggest'>
      <ul className='city-suggest-ul'>
        {
          result.map(item => {
            return <SuggestItem key={item} name={item} onSelect={onSelect} />
          })
        }
      </ul>
    </div>
  )
};

Suggest.propTypes = {
  searchKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default memo(Suggest)