import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App/App'

test('render current user greeting', () => {
  render(<App />)

  const userGreeting = screen.getByText(/welcome Tamar/i)

  expect(userGreeting).toBeInTheDocument()
})
