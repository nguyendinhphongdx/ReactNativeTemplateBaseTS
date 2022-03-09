import {actionTypesUser} from '../constants';
import {iUser} from '../Interfaces';
type PropsTypes = {
  deviceToken: string | null;
  user: iUser | null;
};
type PropsAction = {
    type: string | null,
    payload: iUser | string | null,
}
const initialState: PropsTypes = {
  user: null,
  deviceToken: null,
};
const userReducer = (state = initialState, action: PropsAction) => {
  switch (action.type) {
    case actionTypesUser.login:
      const user = action.payload;
      return {
        ...state,
        user,
      };
    case actionTypesUser.logout:
      return {
        ...state,
        user: null,
      };
    default:
      return {...state};
  }
};

export default userReducer;
