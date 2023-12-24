import React, { useContext } from 'react'

export const UserContext = React.createContext({
  user: null,
  handleLoginButtonClick: () => {},
})

const useUserContext = () => {
  const user = useContext(UserContext)
  if (!user) {
    return {}
  }
  return user
}

export default useUserContext
