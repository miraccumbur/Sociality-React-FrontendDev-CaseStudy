import React from 'react'

function ColorMean({props}) {
  return (
    <div className='colorMean'>
        <div className='colorType' style={{backgroundColor:props.color}}></div>
        <p>{props.name}</p>
    </div>
  )
}

export default ColorMean