import React from 'react'
import NavigationClientLogos from './NavigationClientLogos'
import NavigationLogo from './NavigationLogo'
import NavigationMenu from './NavigationMenu'

function Navigation() {
  return (
    <div className='navigationContainer'>
        <NavigationLogo></NavigationLogo>
        <div className='navigationDownAreaDiv'>
            <NavigationClientLogos></NavigationClientLogos>
            <NavigationMenu></NavigationMenu>
        </div>
    </div>
  )
}

export default Navigation