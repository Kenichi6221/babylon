const getUserState = ({ user }) => user;
export const getUser = (state) => getUserState(state).user;
export const getUserToken = (state) => getUserState(state).token;
export const getIsAuthenticated = (state) =>
  getUserState(state).isAuthenticated;
