import React from "react";

const SocialSecurityBenefits = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Social Security Benefits</h1>
      <p className="text-center text-lg mb-8">
        If you are a survivor of someone who was receiving Social Security benefits, you or a family member may qualify for monthly survivors benefits. 
        Learn more below.
      </p>

      {/* What are Social Security Death Benefits? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What are Social Security Death Benefits?</h2>
        <p className="text-lg mt-4">
          Social Security Death Benefits are paid to widows, widowers, and dependents of a deceased eligible worker. This benefit helps families with the financial burden of losing their loved one’s income.
        </p>
        <p className="text-lg mt-4">
          The monthly benefit amount is based on the deceased's earnings. The more they paid into Social Security, the higher your benefits.
        </p>
        <p className="text-lg mt-4">
          Additionally, a one-time lump-sum death payment of $255 may be available for a surviving spouse or eligible child.
        </p>
      </div>

      {/* Who Qualifies for Benefits? */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">Who Qualifies for Benefits?</h2>
        <ul className="list-disc ml-8 mt-4">
          <li>A widow or widower age 60 or older</li>
          <li>A surviving divorced spouse (under certain circumstances)</li>
          <li>A widow or widower at any age who is caring for a child under age 16 or disabled</li>
          <li>An unmarried child under age 18 or older with a disability before age 22</li>
        </ul>
      </div>

      {/* Steps for Survivors */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">What Steps Should Survivors Take?</h2>
        <p className="text-lg mt-4">
          In most cases, the funeral home will report the death. However, if not, a surviving family member should notify the Social Security Administration as soon as possible.
        </p>
        <p className="text-lg mt-4">
          Deaths cannot be reported online, and benefits cannot be applied for online.
        </p>
      </div>

      {/* Contact Social Security */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700">How Do I Contact the Social Security Administration?</h2>
        <p className="text-lg mt-4">
          If you need to report a death or apply for benefits, or have questions about qualifying to receive survivor benefits, call <span className="font-bold">1-800-772-1213</span>.
        </p>
        <p className="text-lg mt-4">
          For more information, visit the Social Security website: <a href="https://www.ssa.gov/benefits/survivors" className="text-blue-600 hover:underline">ssa.gov/benefits/survivors</a>
        </p>
      </div>
    </div>
  );
};

export default SocialSecurityBenefits;
