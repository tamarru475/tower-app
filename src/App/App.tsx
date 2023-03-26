import React from 'react'
import Header from '../Components/Header/Header'
import Main from '../Pages/Main'
import CurrentUserContext from '../Contexts/CurrentUserContext'

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    firstName: '',
    lastName: '',
  })

  React.useEffect(() => {
    setCurrentUser({
      firstName: 'Tamar',
      lastName: 'Rubin',
    })
  }, [])

  return (
    <div className='App'>
      <Header />
      <CurrentUserContext.Provider value={currentUser}>
        <Main />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
