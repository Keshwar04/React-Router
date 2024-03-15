import React from 'react'
import {useParams} from 'react-router-dom'
const DynamicURLPath = () => {
    const {num} = useParams()
    console.log(num);
  return (
    <div>DynamicURLPath{num}</div>
  )
}

export default DynamicURLPath