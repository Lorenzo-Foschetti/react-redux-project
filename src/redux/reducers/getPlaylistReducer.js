import { GET_EMINEM, GET_NIRVANA, GET_PLAYLIST, GET_QUEEN } from "../actions";

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
    case GET_EMINEM:
      return {
        ...state,
        eminem: action.payload,
      };
    case GET_NIRVANA:
      return {
        ...state,
        nirvana: action.payload,
      };
    case GET_QUEEN:
      return {
        ...state,
        queen: action.payload,
      };

    default:
      return state;
  }
};

export default getPlaylistReducer;
