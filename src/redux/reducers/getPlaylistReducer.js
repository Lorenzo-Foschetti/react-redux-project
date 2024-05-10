import { GET_PLAYLIST } from "../actions";

const initialState = {
  content: [],
  queen: [],
  nirvana: [],

  eminem: [],
};

const getPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default getPlaylistReducer;
