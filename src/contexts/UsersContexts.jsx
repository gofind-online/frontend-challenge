import {createContext, useState} from 'react'

export const UsersContext = createContext();

export function UsersContextProvider({ children }) {
  //const [] = useState();

  return <UsersContext.Provider value={''}>{children}</UsersContext.Provider>
  
};
