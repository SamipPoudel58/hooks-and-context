import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  // console.log(useContext(ThemeContext), useContext(BookContext));
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li style={{ background: theme.ui }} key={book.id}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// class BookList extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ color: theme.syntax, background: theme.bg }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>The Way Of Kings</li>
//           <li style={{ background: theme.ui }}>The Name of the Wind</li>
//           <li style={{ background: theme.ui }}>The Final Empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

export default BookList;
