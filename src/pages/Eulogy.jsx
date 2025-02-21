import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { CreateEulogy } from "../features/actions/eulogyAction";

const EulogyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [eulogy, setEulogy] = useState("");
const dispatch= useDispatch()
const[eulogyData,setEulogyData]=useState()

  const onSubmit = (data) => {
dispatch(CreateEulogy(data)).then((res)=>{
  setEulogyData(res.payload.eulogy)
})
    setEulogy(`
      In loving memory of ${eulogyData?.firstName} ${eulogyData?.middleName || ""} ${eulogyData?.lastName}, 
      born in ${eulogyData?.birthCountry} on ${eulogyData?.dateOfBirth}. 
      ${eulogyData?.firstName} was a cherished child of ${eulogyData?.parents} and a beloved sibling to ${eulogyData?.siblings}.
      
      ${eulogyData?.firstName} pursued education at ${eulogyData?.education} and had a remarkable career in ${eulogyData?.career}.
      Their journey in marriage led to a beautiful life with ${eulogyData?.spouseChildren}.
      
      A devout follower of ${eulogyData?.religion}, ${eulogyData?.firstName} faced their illness with great strength before passing on ${eulogyData?.dateOfDeath}.
      They will always be remembered for their kindness, love, and legacy.
    `);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Get a Professionally Written Eulogy</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* First, Middle, and Last Name */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1">
            <label htmlFor="firstName" className="block font-medium">First Name</label>
            <input {...register("firstName", { required: true })} id="firstName" placeholder="First Name" className="w-full p-2 border rounded" />
            {errors.firstName && <p className="text-red-500 text-sm">First Name is required.</p>}
          </div>

          <div className="flex-1">
            <label htmlFor="middleName" className="block font-medium">Middle Name</label>
            <input {...register("middleName")} id="middleName" placeholder="Middle Name" className="w-full p-2 border rounded" />
          </div>

          <div className="flex-1">
            <label htmlFor="lastName" className="block font-medium">Last Name</label>
            <input {...register("lastName", { required: true })} id="lastName" placeholder="Last Name" className="w-full p-2 border rounded" />
            {errors.lastName && <p className="text-red-500 text-sm">Last Name is required.</p>}
          </div>
        </div>

        {/* Birth, Death, and Country */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1">
            <label className="block font-medium">Country of Birth</label>
            <input {...register("birthCountry", { required: true })} placeholder="Country of Birth" className="w-full p-2 border rounded" />
            {errors.birthCountry && <p className="text-red-500 text-sm">This field is required.</p>}
          </div>

          <div className="flex-1">
            <label className="block font-medium">Date of Birth</label>
            <input {...register("dateOfBirth", { required: true })} type="date" className="w-full p-2 border rounded" />
            {errors.dateOfBirth && <p className="text-red-500 text-sm">This field is required.</p>}
          </div>

          <div className="flex-1">
            <label className="block font-medium">Date of Death</label>
            <input {...register("dateOfDeath", { required: true })} type="date" className="w-full p-2 border rounded" />
            {errors.dateOfDeath && <p className="text-red-500 text-sm">This field is required.</p>}
          </div>
        </div>

        {/* Family & Relations */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1">
            <label className="block font-medium">Parent's Name</label>
            <input {...register("parents", { required: true })} placeholder="Parent's Name" className="w-full p-2 border rounded" />
            {errors.parents && <p className="text-red-500 text-sm">This field is required.</p>}
          </div>

          <div className="flex-1">
            <label className="block font-medium">Siblings</label>
            <input {...register("siblings")} placeholder="Other Family Members / Siblings" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Education, Career, Marriage */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1">
            <label className="block font-medium">Education</label>
            <input {...register("education")} placeholder="Education Details" className="w-full p-2 border rounded" />
          </div>

          <div className="flex-1">
            <label className="block font-medium">Career</label>
            <input {...register("career")} placeholder="Career Details" className="w-full p-2 border rounded" />
          </div>

          <div className="flex-1">
            <label className="block font-medium">Marriage Life & Children</label>
            <input {...register("spouseChildren")} placeholder="Marriage Life and Children" className="w-full p-2 border rounded" />
          </div>
        </div>

        {/* Religion & Sickness */}
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-1">
            <label className="block font-medium">Religion</label>
            <input {...register("religion")} placeholder="Religion" className="w-full p-2 border rounded" />
          </div>

          <div className="flex-1">
            <label className="block font-medium">Sickness & Demise</label>
            <textarea {...register("sicknessDemise")} placeholder="Sickness & Demise" className="w-full p-2 border rounded h-24"></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition">Generate Eulogy</button>
      </form>

      {/* {eulogy && (
  <div className="mt-6 p-6 border rounded-lg bg-gray-100">
    <h3 className="text-2xl font-bold text-center mb-4 text-blue-600">In Loving Memory</h3>
    <div className="space-y-4">
      <div>
        <p className="text-lg font-semibold">
          <span className="text-blue-600">Name:</span> {eulogyData?.firstName} {eulogyData?.middleName || ""} {eulogyData?.lastName}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Born:</span> {eulogyData?.birthCountry} on {eulogyData?.dateOfBirth}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Parents:</span> {eulogyData?.parents} | <span className="font-semibold">Siblings:</span> {eulogyData?.siblings}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Education:</span> {eulogyData?.education} | <span className="font-semibold">Career:</span> {eulogyData?.career}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Spouse & Children:</span> {eulogyData?.spouseChildren}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Religion:</span> {eulogyData?.religion}
        </p>
      </div>

      <div>
        <p className="text-lg">
          <span className="font-semibold">Illness & Demise:</span> {eulogyData?.sicknessDemise || "Details unavailable"}
        </p>
      </div>

      <div className="mt-4 text-lg italic text-gray-700">
        <p>{`${eulogyData?.firstName} will always be remembered for their kindness, love, and legacy.`}</p>
      </div>
    </div>
  </div>
)} */}

    </div>
  );
};

export default EulogyForm;

