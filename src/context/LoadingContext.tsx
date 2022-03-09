import React, {createContext, useState} from 'react';
export const LoadingContext = createContext<any>(null);
const LoadingContextProvider = ({children}: any) => {
  const [state, setState] = useState<any>(false);
  const setLoading = (loading: boolean) => {
    setState(loading);
  };
  const dataContext = {
      loading:state,
      setLoading
  }
  return (
    <LoadingContext.Provider value={dataContext}>{children}</LoadingContext.Provider>
  );
};
export default LoadingContextProvider;
