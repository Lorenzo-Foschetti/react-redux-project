export const GET_PLAYLIST = "GET_PLAYLIST";
export const GET_EMINEM = "GET_EMINEM";
export const GET_NIRVANA = "GET_NIRVANA";
export const GET_QUEEN = "GET_QUEEN";
export const SEARCH_QUERY = "SEARCH_QUERY";
export const SELECTED_SONG = "SELECTED_SONG";

export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const getsongsAction = (artist) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (resp.ok) {
        let playlist = await resp.json();
        console.log(playlist);
        dispatch({
          type: GET_PLAYLIST,
          payload: playlist.data,
        });
      } else {
        console.log(" new error!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEminemSongs = (artist) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (resp.ok) {
        let playlist = await resp.json();
        console.log(playlist);
        dispatch({
          type: GET_EMINEM,
          payload: playlist.data,
        });
      } else {
        console.log(" new error!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNirvanaSongs = (artist) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (resp.ok) {
        let playlist = await resp.json();
        console.log(playlist);
        dispatch({
          type: GET_NIRVANA,
          payload: playlist.data,
        });
      } else {
        console.log(" new error!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getQueenSongs = (artist) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist
      );
      if (resp.ok) {
        let playlist = await resp.json();
        console.log(playlist);
        dispatch({
          type: GET_QUEEN,
          payload: playlist.data,
        });
      } else {
        console.log(" new error!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchAction = (searchValue) => ({
  type: SEARCH_QUERY,
  payload: searchValue,
});

export const selectedSongAction = (selectedSong) => ({
  type: SELECTED_SONG,
  payload: selectedSong,
});
