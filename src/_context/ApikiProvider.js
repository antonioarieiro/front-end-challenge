import React, { useEffect, useState } from 'react';
import ApikiContext from './ApikiContext';

export const ApikiProvider = ({children}) => {
  const [isUser, setIsUser] = React.useState(false);


  return (
    <ApikiContext.Provider value={{isUser, setIsUser}}>
      {children}
    </ApikiContext.Provider>
  );
}
