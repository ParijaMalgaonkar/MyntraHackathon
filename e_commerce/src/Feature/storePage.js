import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styles from './storePage.module.css'
import data from './shops.json'

import MessageBox from '../components/MessageBox'
// import Branches from '../Airtable/branches'

// import storeListing from './storeListing'



class storePage extends Component  
{

  constructor(props) 
  {
    super(props);
      this.state = 
      {
        userLat: null,
        userLong: null,
        values: []
      };
  }

  
  componentDidMount(){
    this.getMyLocation();
    
  }

  componentDidUpdate() 
  {
    if(this.state.userLat && global.google && this.state.values.length == 0)
    {
      
      const shops = new global.google.maps.places.PlacesService(document.createElement('div')) 
      shops.nearbySearch
      (
        {
          location: new global.google.maps.LatLng(this.state.userLat, this.state.userLong),
          name: this.props.location.state,
          keyword: this.props.location.state,
          type: 'clothing_store',
          radius: 10000,
          // openNow: true
        }, 
        (values) => {
          {this.setState({values})}
        }
      )
    }
  }

  

  getMyLocation() {
      const location = window.navigator && window.navigator.geolocation;
  
      if (location) {
        location.getCurrentPosition(
          (position) => {
            this.setState({
              userLat: position.coords.latitude,
              userLong: position.coords.longitude
            });
          },
          (error) => {
            this.setState({ userLat: "err-latitude", userLong: "err-longitude" });
          }
        );
      }
    }

  
        
    render () 
    {

      // const { brand } = this.props.location.state;
      // console.log("brand name : ", brand);

      // console.log("Lat ", this.state.userLat);
      // console.log("Long ", this.state.userLong);
      console.log("values are= ", this.state.values);
      // console.log("branches : ", this.props.brandName);

      // const slotURL = null;

      

      function stripAndClean(name) {
        let newName = name.toLowerCase();
        newName = newName.replace(/[&/\#,+()$~%.'":*?<>{} !]/g, '');
        return newName;
      }
        
     

      function getAirtable(name) 
      {
        name = stripAndClean(name);
        console.log("name: ", name);
        if(name === 'adidas') {
          window.open('https://airtable.com/embed/shrA8wWONCgok6Mie?','_blank');
        }

        else if(name === 'nike') {
          window.open('https://airtable.com/embed/shrgLpRouLnzrzHIQ?','_blank');
        }

        else if(name === 'veromoda') {
          window.open('https://airtable.com/embed/shrftv42WT8doeg6S?','_blank');
        }

        else if(name === 'marksspencer') {
          window.open('https://airtable.com/embed/shrbpUockrukgOB5W?','_blank');
        }

        else {
          const error = 'Error: 404 Not Found';
          <MessageBox>{error}</MessageBox>

        }
      }





      let storesList = this.state.values
        //   .filter(place => {
        //     return place.name != shops.name;
        // })

        .filter(addr => {
          return addr.vicinity != data.address;
      })

        .map(storeInfo=> {
          return (
            <div>
              <ul className={styles.storeDetailsCard}>
              <h2 className={styles.storeName}>{storeInfo.name}</h2>
              <br />
              <h3 className={styles.storeAddr}>{storeInfo.vicinity}</h3>
              <br />
              {/* <h3>{storeInfo.open_now}</h3> */}
              <div className={styles.buttonArea}>
              <button className={styles.slotButton} onClick={() => getAirtable(storeInfo.name)}>Book Slots</button>
              <button className={styles.directionButton}>Get Directions</button>
              </div>
              </ul>
            </div>
          )
      })

    
      return (
        <div className={styles.storesDisplay}>
            <h1>Nearest stores listed according to your location: </h1>
            <br></br>
            <div className={styles.parentDiv}>
            <div className={styles.listDiv}>
              {storesList}
            </div>
            <div className={styles.mapDiv}>
              <h1>Map</h1>

            </div>

            </div>
        </div>
      )
    }
}

export default storePage;