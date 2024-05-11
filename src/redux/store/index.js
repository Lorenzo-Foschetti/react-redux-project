import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getPlaylistReducer from "../reducers/getPlaylistReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  getPlaylist: getPlaylistReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
