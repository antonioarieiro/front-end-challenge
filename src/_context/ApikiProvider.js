import React, { useState } from 'react';
import ApikiContext from './ApikiContext';

export const ApikiProvider = ({children}) => {
  const [isUser, setIsUser] = useState(false);


  return (
    <ApikiContext.Provider value={{isUser, setIsUser}}>
      {children}
    </ApikiContext.Provider>
  );
}
