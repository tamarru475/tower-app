import React from 'react'
import Greeting from '../Components/Greeting/Greeting'
import Form from '../Components/Form/Form'

const Main: React.FC = () => {
  return (
    <main className='main'>
      <Greeting />
      <Form />
    </main>
  )
}

export default Main
