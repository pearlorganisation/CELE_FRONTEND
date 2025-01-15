function Veterans() {
  return (
    <>
      <div className="">
        {/* VA Burial Benefits Section */}
 
          <div className=" ">
            <h1 className="text-5xl py-6 text-green-800">Veterans Services</h1>
            <div>
              <p  className="text-gray-600">
                Many of us take our freedoms for granted, but our staff at Mothe
                Funeral Homes, LLC proudly acknowledges the sacrifices made by
                those who have served our country through their patriotism, love
                of country and willingness to protect others. Our staff is
                committed to providing quality service and professional
                assistance to help families complete the necessary forms to
                obtain benefits that are provided through the United States
                Department of Veterans Affairs for deceased veterans. In
                addition to the information below, a link is listed here to view
                local veterans' cemeteries.
              </p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mt-8">
            What are VA burial benefits and memorial items?
          </h3>
          <p className="text-gray-600 mt-2">
            The VA burial benefits are designed to assist service members,
            veterans, and their families plan and pay for a burial or memorial
            service in a VA national cemetery. Memorial items are provided
            through the Veterans Affairs to honor the service of those who have
            served the country.
          </p>
        </div>

        {/* Qualifications Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-800">
            Who qualifies for burial benefits and burial in a national cemetery?
          </h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>A veteran who didn’t receive a dishonorable discharge</li>
            <li>
              A service member who died while on active duty, active duty for
              training, or inactive duty for training
            </li>
            <li>
              The spouse or minor child of a veteran, even if the veteran died
              first
            </li>
            <li>
              In some cases, the unmarried adult dependent child of a veteran
            </li>
          </ul>
        </div>

        {/* Military Funeral Honors */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-800">
            What are military funeral honors and a committal service?
          </h3>
          <p className="text-gray-600 mt-2">
            Military funeral honors include the playing of “Taps,” a rifle
            detail, a color guard, and uniformed service members who properly
            fold and present the United States flag to the grieving family.
            These flags are typically given to the deceased’s next of kin or
            close friend.
          </p>
        </div>

        {/* Burial Benefits and Application */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-800">
            What are burial benefits and how do I apply?
          </h3>
          <p className="text-gray-600 mt-2">
            The veterans death benefits help cover the burial, funeral, and
            transportation costs associated with the deceased’s services and
            disposition. For those being buried in a national cemetery,
            survivors can receive assistance with the burial and funeral costs,
            the plot or internment, and the transporting of the veteran’s
            remains for burial.
          </p>
          <p className="text-gray-600 mt-2">
            You must file a claim for a non-service-connected burial allowance
            within two years after the veteran’s burial or cremation. There is
            no time limit to file for a service-connected burial, plot, or
            interment allowance.
          </p>
          <p className="text-gray-600 mt-2">
            Apply online at{" "}
            <a
              href="https://www.va.gov/burials-and-memorials/application/530/introduction"
              className="text-blue-500"
            >
              VA Burial Application
            </a>{" "}
            or by mail after completing the VA Form 21P-530.
          </p>
        </div>

        {/* Headstone and Memorial Items */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-800">
            Headstones and Memorial Items
          </h3>
          <p className="text-gray-600 mt-2">
            A veteran who didn’t receive a dishonorable discharge or a service
            member who died while on active duty may be eligible for a headstone
            or marker if they meet certain requirements. To find out if your
            deceased loved one qualifies, visit{" "}
            <a
              href="https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/"
              className="text-blue-500"
            >
              VA Headstones and Markers
            </a>
            .
          </p>
          <p className="text-gray-600 mt-2">
            The Department of Veteran Affairs also provides a headstone for
            unmarked graves of an eligible deceased veteran at no charge. To
            request a headstone, grave marker, or niche marker, fill out the VA
            Form 10-1330 and send to:
          </p>
          <address className="mt-2">
            Department of Veteran Affairs
            <br />
            5109 Russell Road
            <br />
            Quantico, VA 22134-3909
          </address>
        </div>

        {/* VA Contact Information */}
        <div className="mt-6">
          <p className="text-gray-600 mt-2">
            For more information regarding VA burial benefits and memorial
            items, visit{" "}
            <a
              href="https://www.va.gov/burials-memorials/"
              className="text-blue-500"
            >
              VA Burials & Memorials
            </a>{" "}
            or contact the VA office at 1-800-827-1000.
          </p>
        </div>

        {/* Veterans' Cemeteries Link */}
        <div className="mt-6">
          <p className="text-gray-600 mt-2">
            In addition to the information above, a link is listed here to view
            local veterans' cemeteries:{" "}
            <a
              href="https://www.vetaffairs.la.gov/southeast-louisiana-veterans-cemetery/"
              className="text-blue-500"
            >
              Southeast Louisiana Veterans Cemetery
            </a>
            .
          </p>
        </div>

    </>
  );
}
export default Veterans;
