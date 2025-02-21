import React from 'react'
import HeaderComp from './HeaderComp'
import ImgCard from './ImgCard'

function PersonalServices() {

  return (
    <div>
      <HeaderComp />
      <ImgCard
      h1="Personal Services"
      p="When searching for ways to personalize a funeral service, Mothe Funeral Homes, LLC offers a variety of ways to make a service special to the loved one it is inspired by. Whether it be releasing doves, giving military honors or a Harley motorcycle hearse we have a service to match any family."
        image="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Balloon+Release+for+Funeral+Services+offered+at+Mothe+Funeral+Home+in+Louisiana-1920w.jpg"
        title="Funeral Balloon Release"
        description="We can produce a personal tribute video that can be played at the service and online. Simply provide us with the photographs you want to include and we will transform them into a video celebration of your treasured memories. DVDs or digital files of the video are also available."
      />
          <ImgCard
  
        image="https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/Tribute+Blankets-1920w.jpg"
        title="Burial Services"
        description="A graveside or committal service is typically held immediately following the funeral service and can also be a small intimate gathering of those closest to you. We work with families to design a service that honors their loved one."
      />
    </div>
  )
}

export default PersonalServices
