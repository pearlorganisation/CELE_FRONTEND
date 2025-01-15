import React from 'react';

const CemeteryProperty= () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Contact Section */}
      <div className="text-center bg-green-800 text-white py-6 px-4">
        <h1 className="text-2xl font-bold">Need to Contact Us? We Are Available</h1>
        <p className="mt-2 text-lg">
          <span className="font-semibold">CALL US:</span> 504-393-1741
        </p>
      </div>

      {/* Cemetery Property Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <h2 className="text-3xl font-bold text-green-800 text-center">Cemetery Property</h2>
        <p className="text-gray-700 text-center mt-4">
          Whether you choose burial or cremation, a funeral service is an important part of honoring your loved one and starting the healing process. We offer service options that are meaningful and healing.
        </p>

        {/* Subsections */}
        <div className="mt-8 space-y-8">
          {/* Westlawn Cemeteries */}
          <div>
            <h3 className="text-xl font-semibold text-green-800">Westlawn Cemeteries</h3>
            <blockquote className="italic text-gray-600 mt-2">
              "A Place of Beauty and a Place of Serenity, A Place for Prayer and a Place for Remembrance, A Place to Honor and a Place to Memorialize."
            </blockquote>
            <p className="text-gray-700 mt-4">
              Westlawn Cemeteries are conceived as an everlasting homage dedicated to the sacred trust of preserving the memory of those we love. All structures are of exceptional value, built with the finest materials to last for centuries.
            </p>
          </div>

          {/* List of Cemeteries */}
          <div>
            <h4 className="text-lg font-semibold text-green-700">Westlawn Cemeteries Locations:</h4>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>Westlawn Memorial Park, Gretna, LA</li>
              <li>Westlawn South, Gretna, LA</li>
              <li>Jefferson Memorial Gardens, St. Rose, LA</li>
              <li>McDonoughville Mausoleum, Gretna, LA</li>
              <li>Hillview Memorial Gardens, Bogalusa, LA</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-green-700">Services Provided:</h4>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
              <li>At-need Sales</li>
              <li>Pre-need Sales</li>
              <li>Interments</li>
              <li>Inscriptions</li>
              <li>New Construction</li>
              <li>Maintenance and Repairs</li>
              <li>Record Keeping</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ground Burial Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-green-800 text-center">Ground Burial</h2>
          <p className="text-gray-700 mt-4 text-center">
            Traditionally, in-ground burial has been the choice of many families. We provide families with many in-ground burial options, including large family estate lots, multiple space lots, and single grave spaces.
          </p>
        </div>
      </div>

      {/* Mausoleums Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-green-800 text-center">Mausoleums</h2>
          <p className="text-gray-700 mt-4 text-center">
            Mausoleums allow for above-ground entombment in either community buildings or specially designed family structures. At one time, mausoleum entombment was available only to royalty or the very wealthy. Now it is affordable to many families.
          </p>
          <ul className="list-disc ml-6 mt-6 text-gray-700 space-y-2">
            <li>Community Mausoleum with crypt space</li>
            <li>Cremation niches with glass fronts for personalization</li>
            <li>Private Family Mausoleums</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-green-800 text-white py-6 px-4">
        <h2 className="text-xl font-bold">Have Questions? We Have Answers.</h2>
        <p className="mt-2">Contact us at 504-393-6963 for new property purchases, directions, burials, maintenance, or general inquiries.</p>
      </div>
    </div>
  );
};

export default CemeteryProperty;
