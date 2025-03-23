import { createContext } from "react"

export const datacontext = createContext()

const UserContext = ({ children }) => {
  let value = {
    
  }
  return (
    <div>
      <datacontext.Provider value={value}>
        {children}
      </datacontext.Provider>
    </div>
  )
}

export default UserContext