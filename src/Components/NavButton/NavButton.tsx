import React, { Dispatch, SetStateAction } from 'react'

interface NavButtonProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavButton: React.FC<NavButtonProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const fadeInCloseButtonClass = isMenuOpen ? 'navbutton_active' : ''

  return (
    <button
      type='button'
      className={`navbutton ${fadeInCloseButtonClass}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <span className='navbutton__line'></span>
      <span className='navbutton__line'></span>
      <span className='navbutton__line'></span>
    </button>
  )
}

export default NavButton
