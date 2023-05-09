import React from 'react'
import noImg from '../assets/No-Image-Placeholder.jpg'

const Card = ({book}) => {

    // console.log();
  return (
    <div className="card">
        <div className="book-box">
        <div className="book-3d">
        <div className="book-3d__inner">
            <img class="book-3d__cover" src={book.volumeInfo.imageLinks?.smallThumbnail || noImg } alt="The Wizard of Oz by L. Frank Baum" />
        </div>
        </div>

        </div>
        <div className="content-box">
        <div className="fam">
            <div className="title">
            {book.volumeInfo.title}
            </div>
            <p className="author">
            {book.volumeInfo?.authors?.slice(0,1) || book.volumeInfo?.authors }
            </p>
        </div>

        <a href={book.volumeInfo.previewLink} className="btn">
            View
        </a>
        </div>
    </div>
  )
}

export default Card
