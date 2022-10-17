import React from 'react'

function ClientTab({props}) {
    const handleClick=()=>{
        props.changeTab(props.name);
    }
  return (
    <div onClick={()=>handleClick()} className='clientTabDiv'>
        {props.choosenTab===props.name?<div className='selected'></div>:null}
        <div>
          {props.clientTabNotification?<div className='clientTabNotification'>{props.clientTabNotification}</div>:null}
        <img className={props.choosenTab===props.name?'choosedImage':'dontChooseImage'} src={props.imgSrc} alt='Logo1'></img>
        </div>
    </div>
  )
}

export default ClientTab