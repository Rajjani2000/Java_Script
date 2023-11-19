import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
const books = [
  {
    imgs: "https://images-na.ssl-images-amazon.com/images/I/71musw9bJWL._AC_UL381_SR381,381_.jpg",
    titles: "The Time",
    authors: "RAM",
  },
  {
    imgs: "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL381_SR381,381_.jpg",
    titles: "The Falling of the Time",
    authors: "The RAM",
  },
  {
    imgs: "https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL381_SR381,381_.jpg",
    titles: "The Falling Apart",
    authors: "The Roy",
  },
];

function Bookgallery() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book}></Book>;
      })}
    </section>
  );
}
 
const Book = (props) => {
  const { imgs, titles, authors } = props;
  return (
    <article className="book">
      <img src={imgs} alt="" />
      <h1>{titles}</h1>
      <h4>{authors}</h4>
    </article>
  );
};

ReactDOM.render(<Bookgallery />, document.getElementById("root"));
