import { ADD } from "../actions/actions";
import { REMOVE } from "../actions/actions";
import { EDIT } from "../actions/actions";

const WorkItemList = (
  state = [
    {
      workItem: "Write some Code!",
      detail: "React Native",
      id: "uuid1"
    },
    {
      workItem: "Présentation projet!",
      detail: "salle 22",
      id: "uuid12"
    },
    {
      workItem: "faire du sport!",
      detail: "",
      id: "uuid123"
    }
  ],
  action
) => {
  switch (action.type) {
    case ADD:
      state = [...state, action.payload];
      break;
    case REMOVE:
      state = action.payload;
      break;

    case EDIT:
      state = action.payload;
      break;

    default:
      return state;
  }

  return state;
};

export default WorkItemList;
