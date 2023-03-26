import React from 'react'
import Menu from '../Menu/Menu'
import NavButton from '../NavButton/NavButton'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const title = isMenuOpen ? 'Menu' : 'Register Card Form'

  return (
    <header className='header'>
      <Menu navItems={[{ to: '', title: '' }]} isMenuOpen={isMenuOpen} />
      <NavButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <h1 className='header__title'>{title}</h1>
    </header>
  )
}

export default Header
