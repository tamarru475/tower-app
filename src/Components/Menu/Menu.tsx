import React from 'react'

type NavItem = { to: string; title: string }

interface MenuProps {
  navItems: NavItem[]
  isMenuOpen: boolean
}

const Menu: React.FC<MenuProps> = ({ navItems, isMenuOpen }) => {
  const fadeinMenuClass = isMenuOpen ? 'nav_fadein' : ''
  return (
    <nav className={`nav ${fadeinMenuClass}`}>
      <ul className='nav__list'>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.to} className='nav__item'>
              <a className='nav__link' href={navItem.to}>
                {navItem.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Menu
