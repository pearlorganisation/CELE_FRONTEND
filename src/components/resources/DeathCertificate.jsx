import React from "react";

const DeathCertificates = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Death Certificates</h1>
      <p className="text-center text-lg mb-8">
        Below is all the information our families need for death certificates. If you have any questions, please do not hesitate to{" "}
        <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
          Contact Us
        </a>.
      </p>

      {/* Louisiana Vital Records Registry */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Louisiana Vital Records Registry</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-blue-600">Orleans Parish:</h3>
          <p className="text-lg">
            1450 Poydras St., Benson Tower, Ste 400, New Orleans, LA 70112
            <br />
            <a href="tel:5045935100" className="text-blue-600 hover:underline">(504) 593-5100</a>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-blue-600">Jefferson Parish:</h3>
          <p className="text-lg">
            1855 Ames Boulevard, Marrero, LA 70072
            <br />
            <a href="tel:5043498855" className="text-blue-600 hover:underline">(504) 349-8855</a>
          </p>
        </div>
      </div>

      {/* Ordering Death Certificates */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Ordering Death Certificates</h2>
        <p className="text-lg mt-4">
          Applications may be made online, in person, by mail, or by a funeral home. Copies are $7.00 each (plus postage) and may take up to two weeks to come in.
        </p>
        <p className="text-lg mt-4">
          You may obtain a certified copy of a death certificate if you are one of the following:
        </p>
        <ul className="list-disc ml-8 mt-2">
          <li>Surviving spouse of the person named on the document</li>
          <li>Parent of the person named on the document</li>
          <li>Adult child of the person named on the document</li>
          <li>Sibling of the person named on the document</li>
          <li>Grandparent of the person named on the document</li>
          <li>Adult grandchild of the person named on the document</li>
          <li>Beneficiary of an insurance policy of the person named on the document</li>
        </ul>
        <p className="text-lg mt-4">
          The Louisiana Vital Records Registry maintains death records ONLY for deaths that occurred in Louisiana. If you need a certified copy of a death certificate from another state, you must contact that state's vital records office.
        </p>
        <p className="text-lg mt-4">
          Under Louisiana law, death records are strictly confidential until 50 years after the year of death. Currently, the Louisiana Vital Records Registry maintains death records from 1957 to the present. Death records older than 50 years are available at the Louisiana State Archives.
        </p>
      </div>

      {/* Amendments to Death Records */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Amendments to Death Records</h2>
        <p className="text-lg mt-4">
          The process to make changes to a death certificate varies depending on the type of legal change needed and how recently the record was filed. Amendments to vital records are governed by Louisiana statutes and administrative codes. The Vital Records Registry must work within these laws when making amendments to records.
        </p>

        {/* Amendment to Demographic Portion */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Amendment to Demographic Portion of Death Certificate</h3>
          <p className="text-lg mt-4">
            Items 1 and 3-23 of the death certificate are amended by a request made to the Vital Records Registry by the funeral home listed on the death certificate. The funeral home must submit an amendment letter on funeral home letterhead and include the following:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Name and date of death of the deceased</li>
            <li>Item number(s) to be amended</li>
            <li>Incorrect information currently contained in the item(s)</li>
            <li>Information as it should appear in the item(s)</li>
            <li>Original signature of the funeral director</li>
          </ul>
        </div>

        {/* Amendment to Medical Portion */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-blue-600">Amendment to Medical Portion of Death Certificate</h3>
          <p className="text-lg mt-4">
            Items 2 and 27-32 of the death certificate are amended by a request made to the Vital Records Registry by the attending physician or coroner. The attending physician or coroner must submit an amendment letter on letterhead that includes the following:
          </p>
          <ul className="list-disc ml-8 mt-2">
            <li>Name and date of death of the deceased</li>
            <li>Item number(s) to be amended</li>
            <li>Incorrect information currently contained in the item(s)</li>
            <li>Information as it should appear in the item(s)</li>
            <li>Original signature of the attending physician or coroner</li>
          </ul>
        </div>

        <p className="text-lg mt-4">
          Notice: Death certificates are amended using the interlinear method. A line is drawn through the old information, and the new information is entered. The line shall not obscure the old information.
        </p>
      </div>
    </div>
  );
};

export default DeathCertificates;
