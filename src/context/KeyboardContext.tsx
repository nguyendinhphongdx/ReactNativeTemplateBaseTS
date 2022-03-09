import {createContext, useEffect, useState} from 'react';
import React, {Keyboard, KeyboardEvent} from 'react-native';
export const KBContext = createContext<any>(null);
const KeyboardContextProvider = ({children}: any) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  // useEffect(() => {
  //   const show = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
  //   const hide = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
  //   return () => {
  //     show?.remove();
  //     hide?.remove();
  //   };
  // }, [])
  const dataContext = {
    keyboardHeight
  }
  return <KBContext.Provider value={dataContext}>{children}</KBContext.Provider>
};
export default KeyboardContextProvider;