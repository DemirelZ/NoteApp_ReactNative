import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/RootNavigator';
import Provider from './src/context/Provider';

const App = () => {
  return (
  <Provider>
      <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
  );
};

export default App;
