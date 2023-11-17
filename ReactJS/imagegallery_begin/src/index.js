import React from "react";
import ReactDOM from "react-dom";
import '../src/index.css'

function Bookgallery() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Img />
      <Title/>
      <Author />
    </article>
  );
};

const Img = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL381_SR381,381_.jpg"  alt=' '/>
);

const Author = () => <h4>The Roy</h4>;

const Title = () =>
(
 <h1>The Falling Apart</h1>
);
ReactDOM.render(<Bookgallery />, document.getElementById("root"));
