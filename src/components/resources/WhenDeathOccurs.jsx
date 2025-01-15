import React from 'react';

const WhenDeathOccurs = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-8">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">When Death Occurs</h1>
        <p className="mt-4 text-lg text-gray-600">
          Immediately following the death of a loved one, there are many decisions that must be made. This guide will help you navigate the process.
        </p>
      </section>

      {/* Contact the Authorities Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact The Proper Authorities</h2>
        <p className="text-gray-600">
          Before making arrangements, a legal pronouncement of death must be declared. If your loved one dies at a medical or nursing facility, the staff will handle this. If the death occurs at home, contact emergency officials for a legal declaration.
        </p>
      </section>

      {/* Begin to Make Arrangements Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Begin To Make Arrangements</h2>
        <p className="text-gray-600">
          Once the declaration is made, you can start the funeral arrangements. If pre-arranged plans exist, review them. If not, choose a funeral home and meet with the director. Major decisions include burial or cremation, the type of service, location, and obituary drafting.
        </p>
      </section>

      {/* Funeral Director Info Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Information Funeral Directors May Need</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Full name and address</li>
          <li>Marital status</li>
          <li>Race/Ethnicity</li>
          <li>Date and city of birth</li>
          <li>Highest level of education</li>
          <li>Father’s name, mother’s maiden name</li>
          <li>Name of spouse</li>
          <li>Occupation and employer</li>
        </ul>
      </section>

      {/* Documents Funeral Directors May Need Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Documents Funeral Directors May Need</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Account statements</li>
          <li>Beneficiary designations</li>
          <li>Life insurance policies</li>
          <li>Military discharge papers (form DD 214)</li>
          <li>Social Security number</li>
        </ul>
      </section>

      {/* Personal Property Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Taking Care of Personal Property</h2>
        <p className="text-gray-600">
          After the death of your loved one, secure their home and vehicle. If there is a pet, make arrangements for its care. Forward any mail and cancel any upcoming appointments. Notify the deceased’s employer about the death as well.
        </p>
      </section>
    </div>
  );
};

export default WhenDeathOccurs;
