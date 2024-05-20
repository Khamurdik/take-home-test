import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApplicationContextType {
  value: string;
  setValue: (value: string) => void;
}

// Values here don't matter as long as they are set inside ContextProvider.
// This is done only to NOT pass undefined as possibke context type
const defaultContextValue: ApplicationContextType = {
  value: '',
  setValue: () => { },
};

const ApplicationContext = createContext<ApplicationContextType>(defaultContextValue);

const ApplicationContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const previousContextString = localStorage.getItem('application_context');
  const previousContext = previousContextString ? JSON.parse(previousContextString) : {};
  const [value, setValue] = useState<string>(previousContext.value || 'Actual default values');

  return (
    <ApplicationContext.Provider value={{ value, setValue }}>
      {children}
    </ApplicationContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { ApplicationContextProvider, useAppContext };