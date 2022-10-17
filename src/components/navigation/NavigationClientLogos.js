import React, {useState} from 'react'
import ClientTab from './ClientTab'

function NavigationClientLogos() {
    const [choosenTab,setChoosenTab] = useState("logo1")
  return (
    <div className='navigationClientLogosContainer'>
        <ClientTab props={{imgSrc:"/pictures/Logo1.png",choosenTab:choosenTab,name:"logo1",changeTab:setChoosenTab,clientTabNotification:99}}></ClientTab>
        <ClientTab props={{imgSrc:"/pictures/Logo2.png",choosenTab:choosenTab,name:"logo2",changeTab:setChoosenTab}}></ClientTab>
        <ClientTab props={{imgSrc:"/pictures/Logo3.png",choosenTab:choosenTab,name:"logo3",changeTab:setChoosenTab}}></ClientTab>
        <ClientTab props={{imgSrc:"/pictures/Logo4.png",choosenTab:choosenTab,name:"logo4",changeTab:setChoosenTab}}></ClientTab>
        <ClientTab props={{imgSrc:"/pictures/Logo5.png",choosenTab:choosenTab,name:"logo5",changeTab:setChoosenTab}}></ClientTab>
        <ClientTab props={{imgSrc:"/pictures/Logo6.png",choosenTab:choosenTab,name:"logo6",changeTab:setChoosenTab}}></ClientTab>
    </div>
  )
}

export default NavigationClientLogos