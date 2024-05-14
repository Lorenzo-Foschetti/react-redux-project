import { Col, Container, NavLink } from "react-bootstrap";
import prev from "../assets/playerbuttons/prev.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const MyPlayer = () => {
  const selectedSong = useSelector((state) => state.selectedSong.content);

  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Col>
        <div className="row h-100">
          <div lg={10} className="offset-lg-2 ">
            <div className="row h-100 flex-column justify-content-center align-items-center">
              <div className="col-6 col-md-4 d-flex align-items-center justify-content-end">
                {selectedSong && (
                  <>
                    <div className="d-flex justify-content-between gx-3 ">
                      <img src={selectedSong.artist.picture_small} alt="" />
                      <div className=" text-secondary">
                        <p className="m-0"> {selectedSong.title}</p>
                        <p className="m-0"> {selectedSong.artist.name}</p>{" "}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="col-6 col-md-4 playerControls">
                <div className="d-flex">
                  <NavLink href="#1">
                    <img src={shuffle} alt="shuffle" />
                  </NavLink>
                  <NavLink href="#1">
                    <img src={prev} alt="prev" />
                  </NavLink>
                  <NavLink href="#1">
                    <img src={play} alt="play" />
                  </NavLink>
                  <NavLink href="#1">
                    <img src={next} alt="next" />
                  </NavLink>
                  <NavLink href="#1">
                    <img src={repeat} alt="repeat" />
                  </NavLink>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default MyPlayer;
