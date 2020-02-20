import { SHOW_HIDE } from "../actions/actions";

const ToggleWorkItemList = (state = true, action) => {
  switch (action.type) {
    case SHOW_HIDE:
      state = !state;
      break;

    default:
      return state;
  }
  return state;
};
export default ToggleWorkItemList;
