const SongCard = ({ singleSong }) => {
  return (
    <div class="col text-center">
      <img class="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>{singleSong.title}</p>
    </div>
  );
};

export default SongCard;
