import React from 'react'
import Menu from '../Menu/Menu'
import NavButton from '../NavButton/NavButton'

const Header: React.FC = () => {
  const [isActive, setisActive] = React.useState(false)
  const title = isActive ? 'Menu' : 'Register Card Form'

  return (
    <header className='header'>
      <Menu navItems={[{ to: '', title: '' }]} isMenuOpen={isActive} />
      <NavButton
        isMenuOpen={isActive}
        onNavButtonClick={() => setisActive(!isActive)}
      />
      <h1 className='header__title'>{title}</h1>
    </header>
  )
}

export default Header
