import React from "react";
import ReactDOM from "react-dom";
import '../src/index.css'

const first_book = {
  imgs : 'https://images-na.ssl-images-amazon.com/images/I/61k7JqSWOUL._AC_UL381_SR381,381_.jpg',
  titles : 'The Falling Apart',
  authors : 'The Roy',
  
}
const scond_book = {
  imgs : 'https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL381_SR381,381_.jpg',
  titles : 'The Falling of the Time',
  authors : 'The RAM',
  
}
const third_book = 
{
 imgs : 'https://images-na.ssl-images-amazon.com/images/I/71musw9bJWL._AC_UL381_SR381,381_.jpg',
  titles : 'The Time',
  authors : 'RAM',

}




function Bookgallery() {
  return (
    <section className="booklist">
    <Book
    imge={first_book.imgs}
    titl = {first_book.titles}
    aut = {first_book.authors}/>

    <Book
    imge={scond_book.imgs}
    titl={scond_book.titles}
    aut = {scond_book.authors}
    />
    <Book
    imge={third_book.imgs}
    titl={third_book.titles}
    aut = {third_book.authors}/>
    </section>
  );
}

const Book = (props) => {
  
  const {imge,titl,aut} = props;
  return (
    <article className="book">
    <img src={imge} alt=""/>
    <h1>{titl}</h1>
    <h4>{aut}</h4>

    </article>
  );
};


ReactDOM.render(<Bookgallery />, document.getElementById("root"));
