import React, { useEffect, useState } from "react";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState({
    name: "Better",
    artist: "Khalid",
    year: 2018,
  });

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  const changeArtist = (title) => {
    setSongs({ ...songs, artist: title });
  };

  return (
    <div className="song-list">
      <div>
        <p>Song: {songs.name}</p>
        <p>Artist: {songs.artist}</p>
        <p>Year: {songs.year}</p>
      </div>
      <NewSongForm changeArtist={changeArtist} />
      <button
        onClick={() => {
          setSongs({ ...songs, year: songs.year + 1 });
        }}
      >
        Increase Year: {songs.year}
      </button>
    </div>
  );
};

export default SongList;
