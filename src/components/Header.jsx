import React, { useEffect, useState } from 'react'
import Card from './Card';
import { Loader } from './Loader';

const Header = ({search , setSearch}) => {

  const [books , setBooks] = useState([]);
  const [load , setLoad] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(e.target.txt.value)
    console.log(search);
  }

  useEffect(()=>{
    setLoad(true);

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=10`)
    .then(response => response.json())
    .then(data =>{ setBooks(data.items)
      setLoad(false) })
    .catch(console.log(`--`))

  },[search])

  // console.log(books);

  return (
    <div className='hero-wrap' >
    <div className='hero'>
      <div className="left-box">
        <div className="head-txt">
          New &<br />
          Trending
        </div>
        <form onSubmit={handleSubmit} action="post">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" ></path></svg>
          <input className='input' name='txt' type='text' placeholder='search by books or author' />
        </form>
      </div>
      <div className="right-box">
        
      </div>
    </div>
    <div className="card-scroller">
      {
          load?  (<Loader />) :    (
            books?.map((book ,index)=>(
              <Card key={index} book={book}/>
            ))
          )
      }


    </div>
    </div>
  )
}

export default Header
