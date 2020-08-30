import { handleActions } from 'redux-actions';
import { addPayloadToState } from 'redux/utils/reducers';
const defaultState = {
  isUserInRedux: false,
  user: {
    id: '',
    name: '',
    email: '',
    role: '',
  },
  token: '',
};

const userReducer = handleActions(
  {
    USER_LOGED: addPayloadToState,
  },
  defaultState
);

export default userReducer;
