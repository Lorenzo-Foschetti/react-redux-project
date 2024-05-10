import { Row } from "react-bootstrap";

const MyMain = () => {
  return (
    <main class="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div class="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#1">TRENDING</a>
          <a href="#1">PODCAST</a>
          <a href="#1">MOODS AND GENRES</a>
          <a href="#1">NEW RELEASES</a>
          <a href="#1">DISCOVER</a>
        </div>
      </Row>
      <div class="row">
        <div class="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></div>
          </div>
        </div>
      </div>
      <Row>
        <div class="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></div>
          </div>
        </div>
      </Row>
      <Row>
        <div class="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></div>
          </div>
        </div>
      </Row>
    </main>
  );
};

export default MyMain;
