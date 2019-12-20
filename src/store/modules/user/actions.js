export function updateRequest(data) {
  return {
    type: '@user/UPDATE_REQUEST',
    payload: data,
  };
}

export function updateSuccess(profile) {
  return {
    type: '@user/UPDATE_SUCCESS',
    payload: { profile },
  };
}

export function updateFailed() {
  return {
    type: '@user/UPDATE_FAILED',
  };
}
