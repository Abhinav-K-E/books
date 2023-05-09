import React from 'react'
import { useState } from 'react';

import {Navbar ,Header ,SearchFeed, RecentBooks, TopAuthor, Fiction, Motivation, Love} from './components'

const App = () => {
  const [search , setSearch] = useState('');
  return (
    <div className='wrapper'>
      <Navbar />
      <Header search={search} setSearch={setSearch}/>
      <h3>
        For you 🪶
      </h3>
      <RecentBooks />
      <TopAuthor />

      <Fiction />
      <Motivation />
      <Love />
    </div>
  )
}

export default App

