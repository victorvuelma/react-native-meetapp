import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import DevMenu from '@terrysahaidak/react-native-devmenu';

import './config/ReactotronConfig';

import { store, persistor } from './store';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DevMenu>
          <View />
        </DevMenu>
      </PersistGate>
    </Provider>
  );
}
