import { useState } from "react"

function Funeral(){


    const[activeTab,setActiveTab]=useState()
    const[activeTabIndex,setActiveTabIndex]=useState(0)


    const shiftTab=()=>{
        switch(activeTabIndex){
            case 0: return(<>
            <FuneralMemorial />
            
            </>)
        }
    }
    return(<>





    </>)
}
export default Services