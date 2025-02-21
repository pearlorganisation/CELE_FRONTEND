import React from 'react'
import Header from '../components/Section/Header'
import HeroSection from '../components/Section/HeroSection'
import ReviewRating from '../components/Section/ReviewRating'
import ObituariesSec from '../components/Section/Obituaries'
import FamilyReview from '../components/Section/FamilyReview'
import AddressSec from '../components/Section/AddressSec'

function Home() {
  return (
<>
      {/* <Header/> */}
      <HeroSection/>
      {/* <ReviewRating/> */}
      <ObituariesSec/>
      <FamilyReview/>
      <AddressSec/>
      </>
    
  )
}

export default Home
