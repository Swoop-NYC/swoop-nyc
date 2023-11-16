import React from 'react'
import { useSelector } from 'react-redux'

const FavoriteContainer = () => {
  //grab favItems arr from redux store and display this out
  const favItems = useSelector()
  return (
    <div className='favouriteContainer'>
      <div className='text-header'>
        Wishlists something gun is funny
      </div>
      <div className='card container'>
        {/* Display favourite Card
        <div key={item.title} className='items-post'>
        <h4>{item.title}</h4>
        <img src={item.image} style={{ height: '300px', width: '300px' }} />
        <p>
          {item.location[0]}, {item.location[1]}{' '}
        </p>
        <p>{item.description}</p>
        <p>Drop Date: {item.dropDate}</p>
      </div> */}

      </div>
    </div>
  )
}

export default FavoriteContainer
