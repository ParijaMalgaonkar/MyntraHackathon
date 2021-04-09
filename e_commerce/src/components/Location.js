import React,{useEffect, useState} from 'react'
import base from '../Airtable/base'
import LocationFind from './LocationFind'


function Location() {

 const [locations, setLocations] = useState([])

 useEffect(() => {
    base('Adidas')
      .select({ view:'Grid View' })
      .eachPage((records, fetchNextPage) => {
        console.log(records)
        setLocations(records);
        fetchNextPage();
      })
  }, [])


  return (
    <>
    <h1>My Branch</h1>
        {
            locations.map(e => (
                <LocationFind
                 key={e.id}
                 location={e}
                 />  
            ))
        }
    </>
  )
}

export default Location
