import React from 'react'
import CurrentUserContext from '../../Contexts/CurrentUserContext'

const Greeting: React.FC = () => {
  const currentUser = React.useContext(CurrentUserContext)

  return (
    <div className='greeting'>
      <h2 className='greeting__greet'>Welcome {currentUser?.firstName}</h2>
    </div>
  )
}

export default Greeting
