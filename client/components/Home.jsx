import React from 'react'

const Home = ({showHomePage,setShowHomePage}) => {
  setShowHomePage(true);

  return (
    <>
    { showHomePage &&
    <div>
      This is a home page
      <div id='title-div'>
      <h1>STOOPING</h1>
      <h2>(Stu-oop-ing)</h2>
      <h1>The Proccess of Recycling goods for eachtohers benefits</h1>
      </div>
    </div>
    }
    </>
   
  )
}

export default Home
