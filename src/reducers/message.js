import * as Messages from "../constants/Messages";
import * as Types from "../constants/ActionType";

const initialState = Messages.MSG_WELCOME;

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
