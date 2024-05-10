import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getPlaylistReducer from "../reducers/getPlaylistReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  getPlaylist: getPlaylistReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
