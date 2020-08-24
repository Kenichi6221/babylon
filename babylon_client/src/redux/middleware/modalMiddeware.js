export const MODAL_ACTION = 'MODAL_ACTION';

export const modalAction = (action) => {
  const { payload } = action || {};
  const { isModalOpen } = payload || false;
  return {
    type: MODAL_ACTION,
    payload: { isSomeModalOpen: isModalOpen, localActionState: action },
  };
};

const modalStatusHandler = () => (next) => (action) => {
  next(action);
  if (action.type !== MODAL_ACTION) return;
  const actionWith = (data) => ({ ...data });
  const { payload } = action;
  const { localActionState } = payload;
  next(actionWith(localActionState));
};

export default modalStatusHandler;
