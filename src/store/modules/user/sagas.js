import { all, takeLatest, call, put } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { updateFailed, updateSuccess } from './actions';

export function* update({ payload }) {
  try {
    const { name, email, ...pass } = payload;

    const data = { name, email, ...(payload.password ? pass : {}) };

    const response = yield call(api.put, 'users', data);

    yield put(updateSuccess(response.data));

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');
  } catch (err) {
    yield put(updateFailed());

    Alert.alert('Erro ao tentar atualizar perfil', 'Verique seus dados.');
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', update)]);
