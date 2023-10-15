import { Link } from "react-router-dom"

import BookDetails from "../../pages/BookDetails/BookDetails"

import styles from "./BookCard.module.css"


const BookCard = (props) => { 
  return (
    <div className={styles.linkContainer}>
      <Link to={`/books/${props.book.id}`}>
        <img src={props.book.cover} alt="cover-img" />
        <h4>{props.book.title}</h4>
        <h5>{props.book.authors}</h5>
      </Link>
      <BookDetails book={props.book}/>
    </div>
  )
}

export default BookCard