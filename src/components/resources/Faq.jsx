"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const faqs = [
  {
    category: "Frequent Funeral Questions",
    questions: [
      { q: "What services do funeral directors perform?", a: "Funeral directors help with planning, paperwork, and ceremonies." },
      { q: "What are the funeral costs?", a: "Funeral costs vary depending on the services selected." },
      { q: "What is the purpose of a funeral?", a: "Funerals provide a way to honor and remember the deceased." },
      { q: "What are the choices for funeral services?", a: "Options include traditional burial, cremation, and memorial services." },
      { q: "Can you still have a funeral if you choose cremation?", a: "Yes, many people hold a memorial or funeral service before or after cremation." },
      { q: "Can I plan in advance if I choose cremation?", a: "Yes, pre-planning is a common practice to ease future arrangements." },
      { q: "What information should I bring to the arrangement conference?", a: "Necessary documents include identification, wills, and insurance details." }
    ]
  },
  {
    category: "Cemetery Questions",
    questions: [
      { q: "Are cemeteries running out of space?", a: "Some areas have limited space, but many still have availability." },
      { q: "What is Perpetual Care?", a: "A maintenance fund for cemetery upkeep and care." },
      { q: "Can the vault be personalized?", a: "Yes, vaults can have engravings and decorations." },
      { q: "Are there vaults for cremated remains?", a: "Yes, cremation vaults are available in many cemeteries." },
      { q: "Does a body have to be embalmed before it is buried?", a: "Not always, but some cemeteries and funeral homes require it." },
      { q: "Must I purchase a burial vault?", a: "In many cemeteries, a burial vault is required for ground burials." }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Background Section */}
      <div className="relative h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lirp.cdn-website.com/5d83079e/dms3rep/multi/opt/About+Mothe+Funeral+Home+LLC+located+in+Southern+Louisiana+with+Funeral+Homes+in+New+Orleans-+Harvey+and+Merrero+LA-1920w.jpg')",
          }}
        ></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-white text-5xl font-bold">FAQ</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 min-h-screen p-6">
        {faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-green-800">{section.category}</h2>
            <p className="text-gray-600 mb-4">Click on the questions below to reveal each respective answer.</p>
            <div className="space-y-4">
              {section.questions.map((item, index) => {
                const isOpen = openIndex === `${sectionIndex}-${index}`;
                console.log(isOpen,"isopen")
                return (
                  <div key={index} className="border border-gray-300 rounded-md overflow-hidden">
                    <button
                      className="w-full text-left px-4 py-3 bg-white hover:bg-gray-100 flex justify-between items-center relative"
                      onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                    >
                      <span className="font-medium">{item.q}</span>
                      <RiArrowDropDownLine
                        className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl transition-transform ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isOpen && <div className="p-4 bg-gray-50 text-gray-700">{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
