const getUserState = ({ user }) => user;
export const getUser = (state) => getUserState(state).user;
export const getUserToken = (state) => getUserState(state).token;
export const getIsUserInRedux = (state) => getUserState(state).isUserInRedux;
