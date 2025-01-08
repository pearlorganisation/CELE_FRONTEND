import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../features/actions/obituarynotification";

function ObituaryNotifications() {


const{register,handleSubmit,formState:{errors}}=useForm()
const dispatch= useDispatch();
const[status,setStatus]=useState()
const onSubmit= async(data)=>{
console.log("data",data)
dispatch(sendEmail(data))


}



  return (
    <div>
      <div className="relative flex">
        <img
          src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
          alt="img"
          className="w-full  h-96 object-cover"
        />
        <div className="absolute inset-0 flex  items-center  justify-center text-center ">
          <h1 className="mx-auto text-3xl text-white ">
            Obituary Notifications
          </h1>
        </div>
      </div>

      <div className="bg-white items-center mt-20"> 
        <h1 className="text-center mx-auto text-4xl font-bold">
        Receive alerts as we post tributes
            </h1>
        <div className="text-center max-w-3xl mx-auto mt-3">Subscribe to receive an email when we add new obituaries to our website. Your email will not be used for any other purpose and will not be shared. You may unsubscribe at any time.</div>   
  <form action="" onSubmit={handleSubmit(onSubmit)}>
  <div className="flex mt-8 mb-4 border-b-4 px-20 border-[#0B4024] max-w-3xl mx-auto text-start">
  <input
    type="text"
    placeholder="Enter your email address"
    className="max-w-3xl outline-none text-left placeholder:text-left px-2 bg-none w-full  "
    {...register("to",{required:"Email is required"})}
  />
{/* {errors.to && <p>{errors.to.message}</p>} */}
</div>
<button className="max-w-3xl mx-auto flex bg-[#0B4024] text-white   px-80 py-2" type="submit"  >Join Mailing List</button>
  </form>
    {/* Success/Error Status Message */}
    {status && <p className="text-center mt-4 text-green-500">{status}</p>}


            </div>
    </div>
  );
}

export default ObituaryNotifications;
