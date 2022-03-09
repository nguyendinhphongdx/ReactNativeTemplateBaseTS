import React, {createContext, useState} from 'react';
import {AppSettings} from '../config';

export const AuthContext = createContext<any>(null);
const AuthContextProvider = ({children}: any) => {
  const [state, setState] = useState<any>({
    currentUser: AppSettings.getDefaultUser(),
    token: null,
  });
  const handleSaveToken = (token: string) => {
    setState({
      ...state,
      token,
    });
  };
  const dataContext = {
    ...state,
    handleSaveToken
  };

  return (
    <AuthContext.Provider value={dataContext}>{children}</AuthContext.Provider>
  );
};
export default AuthContextProvider;
