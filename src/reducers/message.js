import * as Types from '../constants/ActionType';
import * as Message from '../constants/Messages';

var initialState = Message.MSG_WELCOME;

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state
  }
}
