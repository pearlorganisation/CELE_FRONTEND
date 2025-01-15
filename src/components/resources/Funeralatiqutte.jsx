import React from "react";

const FuneralEtiquette = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 ">Funeral Etiquette</h1>
      <p className="text-center text-lg mb-8">
        Below are some helpful guidelines on funeral etiquette. If you have any questions, feel free to{" "}
        <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
          Contact Us
        </a>.
      </p>

      {/* When Should I Visit? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">When Should I Visit?</h2>
        <p className="text-lg mt-4">
          Once you learn of someone’s death, visiting the family at their home is appropriate, but the funeral home is the best place to visit with family members and offer your condolences. For anyone wanting to visit and offer assistance to the family before services are held, these actions can provide additional comfort. Offering to bring food, household necessities, assist with childcare and handle any errands or chores are a few of the things you can do to assist the grieving family.
        </p>
      </div>

      {/* What Should I Say? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What Should I Say?</h2>
        <p className="text-lg mt-4">
          This is the most common question asked by someone wanting to pay their respects. While no words can adequately express the depth of a loss, offering a few kind words to the family of the deceased lets them know you care. Try to avoid airing your grievances or saying the deceased is in a better place now.
        </p>
      </div>

      {/* Where Should I Sit? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Where Should I Sit?</h2>
        <p className="text-lg mt-4">
          Many people attend funeral services and are unfamiliar with seating arrangements. Typically, at both the funeral and visitation service, the first rows of seats are reserved for family members. If you are not a part of the family, choose a seat behind the reserved seating.
        </p>
      </div>

      {/* What Should I Do? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What Should I Do?</h2>
        <p className="text-lg mt-4">
          Arriving on time is very important. When entering either the funeral home or another location, enter as quietly as possible. If you are attending the visitation, speak to the surviving family members and offer your condolences before taking a seat. Cellphone use during a service is inappropriate. If you feel you must answer a message or call, excuse yourself and walk into another room or outside.
        </p>
      </div>

      {/* What Should I Do About Children? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What Should I Do About Children?</h2>
        <p className="text-lg mt-4">
          While there isn’t a definite answer to this question, a child attending a visitation or funeral service depends on the situation or relationship to the deceased and their family, as well as the age of the child and whether or not they can appropriately behave. If you decide to take your child to any service, explain what will occur while at the service and how they should act during that time.
        </p>
      </div>

      {/* What Should I Give? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What Should I Give?</h2>
        <p className="text-lg mt-4">
          Sending flowers to the funeral home or home is an appropriate way to offer condolences. In some cases, the family members may ask for donations to be made to a particular foundation in lieu of flowers, and those wishes should be honored. Bringing food to the grieving family is another way to show respect to those who are suffering from the loss. A less expensive and completely appropriate option would be to send the family a sympathy card. There is no specific time or expiration on when cards can be sent.
        </p>
      </div>
    </div>
  );
};

export default FuneralEtiquette;
