export const addPayloadToState = (state, action) => {
  return { ...state, ...action.payload };
};
