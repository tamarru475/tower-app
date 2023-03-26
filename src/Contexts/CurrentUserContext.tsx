import { createContext } from 'react'

interface CurrentUserContextType {
  firstName: string
  lastName: string
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null)

export default CurrentUserContext
