import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer";
import getPlaylistReducer from "../reducers/getPlaylistReducer";
import searchReducer from "../reducers/searchReducer";
import selectedSongReducer from "../reducers/selectedSongReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  getPlaylist: getPlaylistReducer,
  search: searchReducer,
  selectedSong: selectedSongReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
