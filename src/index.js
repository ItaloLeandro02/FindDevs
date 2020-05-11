import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'mobx-react';

import './config/ReactotronConfig';
import Stores from './stores/RootStores';
import Routes from './routes';

const App = () => {
  return (
    <Provider {...Stores}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Provider>
  );
};

export default App;
