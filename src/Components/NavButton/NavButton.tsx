import React from 'react'

interface NavButtonProps {
  isMenuOpen: boolean
  onNavButtonClick: () => void
}

const NavButton: React.FC<NavButtonProps> = ({
  isMenuOpen,
  onNavButtonClick,
}) => {
  const fadeInCloseButtonClass = isMenuOpen ? 'navbutton_active' : ''

  return (
    <button
      type='button'
      className={`navbutton ${fadeInCloseButtonClass}`}
      onClick={() => onNavButtonClick}
    >
      <span className='navbutton__line'></span>
      <span className='navbutton__line'></span>
      <span className='navbutton__line'></span>
    </button>
  )
}

export default NavButton
