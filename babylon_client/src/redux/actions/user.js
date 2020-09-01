const USER_LOGED = 'USER_LOGED';

export const userLoged = (payload) => {
  return {
    type: USER_LOGED,
    payload: { ...payload, isUserInRedux: true },
  };
};
