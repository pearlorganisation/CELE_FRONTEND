import React, { useState } from "react";

const FuneralBenefits = () => {
  const [activeTab, setactiveTab] = useState("socialSecurity");

  const tabContent = {
    socialSecurity: (
      <div>
        <h1 className="text-2xl font-bold uppercase ">
          Social Secruity Benefits
        </h1>
        <p>
          are you a servier of someone who was receiving social security
          Benefits? if so, you or another faimly member may qualify for monthly
          survivors benefits...
        </p>
        Social Security Benefits
        <p>
          Are you a survivor of someone who was receiving Social Security
          benefits?
        </p>{" "}
        If so, you or another family member may qualify for monthly survivors
        benefits. As the survivor, if you are the spouse, child or parent of
        someone who has worked long enough under the Social Security
        Administration you may qualify to receive certain benefits. What are
        Social Security Death Benefits? Social Security Death Benefits are paid
        to widows, widowers, and dependents of a deceased eligible worker. This
        benefit, meant to assist with a family’s financial burden of losing the
        lost loved one’s income, is particularly important for young families
        with children. Monthly benefit amounts are based on the earnings of the
        person who died. The more they paid into Social Security, the higher
        your benefits would be. This amount is a percentage of the deceased’s
        basic Social Security benefit. ‍ Additionally, a one-time lump-sum death
        payment of $255 can be paid to the surviving spouse if he or she is
        living with the deceased; or if living apart, was receiving certain
        Social Security benefits on the deceased’s record. When there is no
        surviving spouse, the payment is made to a child who is eligible for
        benefits. Who Qualifies for Benefits? A widow or widower age 60 or older
        A surviving divorced spouse, under certain circumstances A widow or
        widower at any age who is caring for the deceased’s child who is under
        age 16 or disabled and receiving child’s benefits An unmarried child of
        the deceased who is one of the following: Younger than age 18 (up to age
        19 if he or she is a full-time student in an elementary or secondary
        school). Age 18 or older with a disability that began before age 22.
        What Steps Should Survivor’s Take? In most cases, the funeral home will
        report the person’s death, however, if not, a surviving family member
        should notify the Social Security Administration as soon as possible
        following the date of death. Deaths cannot be reported online, and
        benefits can not be applied for online. How Do I Contact the Social
        Security Administration? If you need to report a death or apply for
        benefits, or have questions about qualifying to receive survivor’s
        benefits, call 1-800-772-1213. Additional information is available
        online at ssa.gov/benefits/survivors.
      </div>
    ),
    deathOccurs: (
      <div>
        <h1 className="text-2xl font-bold">When Death Occurs</h1>
        <p>
          Immediately following the death of a loved one, there are many
          decisions that must be made. At this time, you may find your emotions
          are heightened, and for that reason it is a good idea to ask for help
          in making all the decisions and arrangements. Additionally, the
          funeral home’s staff is eager to assist you and the family in making
          the best decisions possible. This information can help guide you and
          your family through the process.
        </p>
      </div>
    ),

    deathCertificate: (
      <div>
        <h1>Death Certificates</h1>
        <p>
          Below is all the information our families need for death certificates,
          if you have any questions please do not hesitate to Contact Us.
        </p>
      </div>
    ),
    funuralEtiquette: (
      <div>
        <h1>Funural Etiquette</h1>
        <p>
          Many of us are unsure about what encouraging words to say to the
          family or how to interact and respond to their feelings of sorrow.
          Knowing a few funeral etiquette rules can help anyone be more
          comfortable in both a funeral and visitation setting. When Should I
          Visit?
        </p>

        Funeral Etiquette
Many of us are unsure about what encouraging words to say to the family or how to interact and respond to their feelings of sorrow. Knowing a few funeral etiquette rules can help anyone be more comfortable in both a funeral and visitation setting.


<h1 className="text-[#0F4B11] text-3xl font-bold"> When Should I Visit?</h1>
Once you learn of someone’s death, visiting the family at their home is appropriate, but the funeral home is the best place to visit with family members and offer your condolences. For anyone wanting to visit and offer assistance to the family before services are held, these actions can provide additional comfort. Offering to bring food, household necessities, assist with childcare and handle any errands or chores are a few of the things you can do to assist the grieving family.
<h1 className="text-[#0F4B11] text-2xl font-bold">
   What Should I Say?
   </h1>

This is the most common question asked by someone wanting to pay their respects. While no words can adequately express the depth of a loss, offering a few kind words to the family of the deceased lets them know you care. Try to avoid airing your grievances or saying the deceased is in a better place now.
<h1 className="text-[#0F4B11] text-2xl font-bold">Where Should I Sit?</h1>
<div>
Many people attend funeral services and are unfamiliar with seating arrangements. Typically, at both the funeral and visitation service, the first rows of seats are reserved for family members. If you are not a part of the family, choose a seat behind the reserved seating.
</div>

<h1 className="text-[#0F4B11] text-2xl font-bold">What Should I Do?</h1> 
  <div>
  Arriving on time is very important. When entering either the funeral home or another location, enter as quietly as possible. If you are attending the visitation, speak to the surviving family members and offer your condolences before taking a seat. Cellphone use during a service is inappropriate. If you feel you must answer a message or call, excuse yourself and walk into another room or outside.
    </div>

    <h1 className="text-[#0F4B11] text-2xl font-bold">What Should I Do About Children?
  </h1>
  <div>
  While there isn’t a definite answer to this question, a child attending a visitation or funeral service depends on the situation or relationship to the deceased and their family, as well as the age of the child and whether or not they can appropriately behave. If you decide to take your child to any service, explain what will occur while at the service and how they should act during that time.
  </div>


 <h1> What Should I Give?
  </h1> 
   <div>
   Sending flowers to the funeral home or home is an appropriate way to offer condolences. In some cases, the family members may ask for donations to be made to a particular foundation in lieu of flowers, and those wishes should be honored. Bringing food to the grieving family is another way to show respect to those who are suffering from the loss. A less expensive and completely appropriate option would be to send the family a sympathy card. There is no specific time or expiration on when cards can be sent.
    </div>
      </div>
    ),
    FaQ: (
      <div>
        <h1>Frequent Funeral Questions</h1>
        <p>Click on the questions below to reveal each respective answer.</p>
      </div>
    ),
    cemeteryEtiqutte: (
      <div>
        <h1>Cemetery Etiquette</h1>
        <p>
          Cemeteries are a place of peace and healing. When you are visiting a
          loved one or attending a graveside service visitors should:
        </p>
      </div>
    ),
  };
  return (
    <div>
      <div className="relative">
        {/* Image */}
        <img
          src="https://cdn.pixabay.com/photo/2018/05/02/23/00/forest-3369950_1280.jpg"
          alt=""
          className="w-full h-[600px]"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="absolute top-44 text-white text-center w-full text-7xl  font-bold">
          <div>{tabContent[activeTab].h1}</div>
        </div>
      </div>
      <div className="  w-full ">
        {/* tab navigation */}
        <div
          className="flex border-b border-gray-300  bg-[#0F4B11] text-white px-20
 "
        >
          <button
            className={`px-4 py-2 ${
              activeTab === "socialSecurity"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] text-white"
                : ""
            }uppercase`}
            onClick={() => setactiveTab("socialSecurity")}
          >
            Social Secruity Benefits
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "deathOccurs"
                ? "border-b-2 border-green-600 text-green-600 bg-[#0c3b0e]"
                : ""
            } uppercase`}
          ></button>

          <button
            className={`px-4 py-2 ${
              activeTab === "deathOccurs"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]"
                : ""
            } uppercase`}
            onClick={() => setactiveTab("deathOccurs")}
          >
            When Death Occurs
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "deathCertificate"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]"
                : ""
            } uppercase`}
            onClick={() => setactiveTab("deathCertificate")}
          >
            Death Certificate
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "funuralEtiquette"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e] "
                : ""
            } uppercase`}
            onClick={() => {
              setactiveTab("funuralEtiquette");
            }}
          >
            Funural Etiquette
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "FaQ"
                ? "border-b-2 border-green-600 font-semibold bg-[#0c3b0e]"
                : ""
            }  uppercase`}
            onClick={() => setactiveTab("FaQ")}
          >
            FAQ
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "cemeteryEtiqutte"
                ? "border-b-2 border-green-600 font-semibold  bg-[#0c3b0e]"
                : ""
            } uppercase`}
            onClick={() => {
              setactiveTab("cemeteryEtiqutte");
            }}
          >
            Cemetery Etiqutte
          </button>
        </div>
      </div>
      <div className="px-20 py-10">{tabContent[activeTab]}</div>
    </div>
  );
};

export default FuneralBenefits;
