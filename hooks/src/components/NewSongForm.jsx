import React, { useState } from "react";

const NewSongForm = ({ changeArtist }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeArtist(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Song Name: </label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
