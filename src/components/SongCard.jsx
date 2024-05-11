import { useDispatch } from "react-redux";
import { SELECTED_SONG } from "../redux/actions";

const SongCard = ({ singleSong }) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(selectedSong) =>
        dispatch({
          type: SELECTED_SONG,
          payload: selectedSong,
        })
      }
      class="col text-center"
    >
      <img class="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>Track: {singleSong.title}</p>
    </div>
  );
};

export default SongCard;
