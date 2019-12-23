import React from 'react';
import { StatusBar } from 'react-native';

import { useSelector } from 'react-redux';

import Header from '~/components/Header';

import routes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = routes(signed);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={signed ? '#000' : '#22202C'}
      />
      {signed && <Header />}
      <Routes />
    </>
  );
}
