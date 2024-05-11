import { SEARCH_QUERY } from "../actions";

const initialState = {
  content: "",
};
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default searchReducer;
