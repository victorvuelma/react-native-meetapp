import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateFailed, updateSuccess } from './actions';

export function* update({ payload }) {
  try {
    const { name, email, ...pass } = payload;

    const data = { name, email, ...(payload.password ? pass : {}) };

    const response = yield call(api.put, 'users', data);

    yield put(updateSuccess(response.data));

    toast.success('Perfil atualizado com sucesso.');
  } catch (err) {
    yield put(updateFailed());

    toast.error('Erro ao tentar atualizar perfil. Verique seus dados.');
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', update)]);
