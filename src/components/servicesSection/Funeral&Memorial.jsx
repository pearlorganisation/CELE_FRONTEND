import React, { useState } from 'react'
import PersonalServices from './PersonalServices.jsx'
import Cremation from './Cremation.jsx'
import HonoringLife from './HonoringLife.jsx'
import Veterans from './Veterans.jsx'

function FuneralMemorial() {
  const[activeTab,setActiveTab]=useState('Funeral Memorial')
  const[activeTabindex,setActiveTabIndex]=useState(0)

  const shiftTab=()=>{
switch(activeTabindex){
  case 0:return(
    <>
    <FuneralMemorial/>
    </>
  )
  case 1:return<div><PersonalServices /></div>
  case 2: return <div><Cremation/></div>
  case 3: return <div><HonoringLife/></div>
  case 4: return <div><Veterans/></div>
case 5:return <div><Veterans/></div>
}

  }
  return (
    <div className='h-full px-4 py-10'>
        <div className="absolute top-44 text-white text-center w-full text-7xl font-bold">
          <div>{activeTab}</div>
        </div>
      {/* tabshifting */}

      <div className='w-full '>
        <div className='bg-[#0F4B11]  '>
        <button
            className={`px-4 py-2 ${activeTab === "Funeral Memorial" ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white" : ""} uppercase`}
            onClick={() => {
              setActiveTab("Funeral Memorial");
              setActiveTabIndex(0);
            }}
          >Funeral Memorial </button>
      </div>
    </div>
    </div>
  )
}

export default FuneralMemorial
