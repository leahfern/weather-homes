import React from 'react'

import Weather from './Weather';

export default function Compare() {

  //ON INITIAL RENDER:
  //randomize two zipcodes to compare.
  //set zipcodes to state
  //---where to get zipcodes?

  //ON CLICK: run the randomize zip code func


  return (
    <div className='Compare'>
      <h1>Weather or Not...</h1>
      <h3>Looking for a place to move? Select which weather you like best and we'll show you homes for sale in that area.</h3>
      <Weather zip='90278'/>
      <Weather zip='15238'/>
      <button>new options</button>
    </div>
  )
}
