import React, { useEffect, useState } from 'react'
import Card from './Card'

const Love = () => {

  const [books , setBooks] = useState([]);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:love&startIndex=0&maxResults=15`)
    .then(response => response.json())
    .then(data => setBooks(data.items))
  } ,[])

  //console.log(books);

  return (
    <>
    <h3>
        Romance 💞
    </h3>
    <div className='scroller'>
        <div className="name">
        Romance 💞
        </div>
        <div className="card-scroller">
        {
            books?.map((book ,index)=>(
            <Card key={index} book={book}/>
            ))
        }

        </div>
    </div>
    </>

  )
}

export default Love
