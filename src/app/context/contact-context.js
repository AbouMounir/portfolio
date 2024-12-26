// context/AuthContext.js

'use client'

import { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ContactContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useIsVisible = () => useContext(ContactContext);
