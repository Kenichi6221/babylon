const USER_LOGED = 'USER_LOGED';

export const userLoged = ({ user, token, ok: isAuthenticated }) => ({
  type: USER_LOGED,
  payload: { user, token, isAuthenticated },
});
