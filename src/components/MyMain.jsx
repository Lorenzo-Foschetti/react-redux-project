import { NavLink, Row } from "react-bootstrap";
import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getEminemSongs,
  getNirvanaSongs,
  getQueenSongs,
  getsongsAction,
} from "../redux/actions";

const MyMain = () => {
  const dispatch = useDispatch();
  const dispatchEminemSongs = useDispatch();
  const dispatchQueenSongs = useDispatch();
  const dispatchNirvanaSongs = useDispatch();
  const mySong = useSelector((state) => state.getPlaylist.content);
  const eminemSong = useSelector((state) => state.getPlaylist.eminem);
  const nirvanaSong = useSelector((state) => state.getPlaylist.nirvana);
  const queenSong = useSelector((state) => state.getPlaylist.queen);

  useEffect(() => {
    dispatchEminemSongs(getEminemSongs("eminem"));
    dispatchQueenSongs(getQueenSongs("queen"));
    dispatchNirvanaSongs(getNirvanaSongs("nirvana"));
  }, []);
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <NavLink href="#1">TRENDING</NavLink>
          <NavLink href="#1">PODCAST</NavLink>
          <NavLink href="#1">MOODS AND GENRES</NavLink>
          <NavLink href="#1">NEW RELEASES</NavLink>
          <NavLink href="#1">DISCOVER</NavLink>
        </div>
      </Row>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Eminem's tracks</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {eminemSong &&
                eminemSong
                  .slice(0, 4)
                  .map((song) => <SongCard key={song.id} singleSong={song} />)}
            </div>
          </div>
        </div>
      </div>
      <Row>
        <div className="col-10">
          <div id="pop">
            <h2>Queen's tracks</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {" "}
              {queenSong &&
                queenSong
                  .slice(0, 4)
                  .map((song) => (
                    <SongCard key={song.id} singleSong={song} />
                  ))}{" "}
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="col-10">
          <div id="hiphop">
            <h2>Nirvana's tracks</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {nirvanaSong &&
                nirvanaSong
                  .slice(0, 4)
                  .map((song) => (
                    <SongCard key={song.id} singleSong={song} />
                  ))}{" "}
            </div>
          </div>
        </div>
      </Row>
    </main>
  );
};

export default MyMain;
