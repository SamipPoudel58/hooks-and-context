import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books] = useState([
    { title: "Game Of Thrones", id: 1 },
    { title: "Fault In Our Stars", id: 2 },
    { title: "Kite Runner", id: 3 },
    { title: "Terminal", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
