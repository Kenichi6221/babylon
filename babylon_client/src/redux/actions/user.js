const USER_LOGED = 'USER_LOGED';

export const userLoged = (payload) => {
  localStorage.setItem('token', payload.token);
  return {
    type: USER_LOGED,
    payload: { ...payload, isUserInRedux: true },
  };
};
