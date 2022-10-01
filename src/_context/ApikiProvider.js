import React, { useState } from 'react';
import ApikiContext from './ApikiContext';

export const ApikiProvider = ({children}) => {
  const [isUser, setIsUser] = useState(false);
  const [currentSlug, setCurrentSlug] = useState('')

  return (
    <ApikiContext.Provider value={{isUser, setIsUser, setCurrentSlug, currentSlug}}>
      {children}
    </ApikiContext.Provider>
  );
}
