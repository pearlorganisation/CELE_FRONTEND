import React, { useState } from 'react';

const FAQ = () => {
  const [openFuneral, setOpenFuneral] = useState(null);
  const [openCemetery, setOpenCemetery] = useState(null);

  const toggleAnswer = (index, type) => {
    if (type === 'funeral') {
      setOpenFuneral(openFuneral === index ? null : index);
    } else {
      setOpenCemetery(openCemetery === index ? null : index);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 space-y-8">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Frequent Funeral & Cemetery Questions</h1>
        <p className="mt-4 text-lg text-gray-600">
          Here are some of the most frequently asked questions regarding funerals and cemeteries. Click on the questions to reveal their answers.
        </p>
      </section>

      {/* Funeral Questions */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Funeral Questions</h2>

        <div className="space-y-4 mt-4">
          <div className="border-b pb-2">
            <button
              className="w-full text-left text-lg font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => toggleAnswer(0, 'funeral')}
            >
              What services do funeral directors perform?
            </button>
            {openFuneral === 0 && (
              <p className="mt-2 text-gray-600">
                The funeral director's job is to assist the bereaved in various ways to help them through the loss of a loved one. They provide bereavement and consolation services and handle arrangements for cremation, burial, and memorial services. Some of their tasks include:
                <ul className="list-disc list-inside mt-2">
                  <li>Removal and transfer of the deceased from the place of death</li>
                  <li>Professional care of the deceased, including embalming</li>
                  <li>Consulting with the family to arrange funeral services</li>
                  <li>Arranging for clergy, music, flowers, and more</li>
                  <li>Filing death certificates and necessary forms</li>
                </ul>
              </p>
            )}
          </div>

          <div className="border-b pb-2">
            <button
              className="w-full text-left text-lg font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => toggleAnswer(1, 'funeral')}
            >
              What are the funeral costs?
            </button>
            {openFuneral === 1 && (
              <p className="mt-2 text-gray-600">
                Funeral costs can vary significantly depending on the type of services you choose. These include:
                <ul className="list-disc list-inside mt-2">
                  <li>Funeral home services</li>
                  <li>Cemetery or cremation fees</li>
                  <li>Embalming and body preparation</li>
                  <li>Transportation and hearse services</li>
                </ul>
                It is best to discuss costs directly with the funeral director to get an accurate estimate based on your preferences.
              </p>
            )}
          </div>

          {/* Additional Funeral Questions can follow a similar structure */}

        </div>
      </section>

      {/* Cemetery Questions */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800">Cemetery Questions</h2>

        <div className="space-y-4 mt-4">
          <div className="border-b pb-2">
            <button
              className="w-full text-left text-lg font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => toggleAnswer(0, 'cemetery')}
            >
              Are cemeteries running out of space?
            </button>
            {openCemetery === 0 && (
              <p className="mt-2 text-gray-600">
                Many cemeteries are running low on space, particularly in urban areas. However, cemeteries are continually finding ways to accommodate burials, including vertical mausoleums or expanding to neighboring land. It’s best to inquire about available plots at your local cemetery.
              </p>
            )}
          </div>

          <div className="border-b pb-2">
            <button
              className="w-full text-left text-lg font-semibold text-blue-600 hover:text-blue-800 focus:outline-none"
              onClick={() => toggleAnswer(1, 'cemetery')}
            >
              What is Perpetual Care?
            </button>
            {openCemetery === 1 && (
              <p className="mt-2 text-gray-600">
                Perpetual Care is an ongoing maintenance program that ensures a cemetery’s grounds are cared for indefinitely. This includes mowing, landscaping, and upkeep of graves, monuments, and pathways. It is typically funded through a one-time payment or as part of a burial package.
              </p>
            )}
          </div>

          {/* Additional Cemetery Questions can follow a similar structure */}

        </div>
      </section>
    </div>
  );
};

export default FAQ;
