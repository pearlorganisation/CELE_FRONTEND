export default function PricingComponent() {
  const plans = [
    {
      name: "Emerald",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      price: "$0",
      features: [
        "1 public project",
        "Public working space",
        "Unlimited pages",
        "5 revisions",
      ],
      imgSrc: "https://Tailwindmix.b-cdn.net/pricing-tables/emerald.png",
    },
    {
      name: "Ruby",
      color: "bg-red-500",
      textColor: "text-red-500",
      price: "$29",
      features: [
        "5 public projects",
        "Private working space",
        "Unlimited pages",
        "10 revisions",
      ],
      imgSrc: "https://Tailwindmix.b-cdn.net/pricing-tables/ruby.png",
    },
    {
      name: "Diamond",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
      price: "$49",
      features: [
        "Unlimited projects",
        "Private and shared spaces",
        "Unlimited pages",
        "Unlimited revisions",
      ],
      imgSrc: "https://tailwindmix.b-cdn.net/pricing-tables/diamond.png",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 mt-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative max-w-sm text-center bg-white rounded shadow-lg shadow-slate-20 lg:max-md-full group text-black`}
          >
            <img
              src={plan.imgSrc}
              alt={plan.name.toLowerCase()}
              className="absolute left-1/2 block w-32 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_16px_16px_#84cc1650] transition-transform duration-700 group-hover:-translate-y-2/3"
            />
            <div className="flex flex-col">
              <header className="flex flex-col gap-6 p-6 pt-28 text-black">
                <h3 className={`text-xl font-medium uppercase `}>
                  {plan.name}
                </h3>
              </header>
              <div
                className={`w-3 h-3 mx-auto rounded-full ${plan.color}`}
              ></div>
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="w-full gap-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <footer>
                <button
                  className={`inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 translate-y-1/2 rounded shadow-xl whitespace-nowrap ${plan.color} shadow-${plan.color} hover:${plan.color} focus:${plan.color} focus-visible:outline-none`}
                >
                  <span>Start now</span>- <span>{plan.price}</span>
                </button>
              </footer>
            </div>
          </div>
        ))}
      </div>
      {/* <!-- End Gem Pricing Table Cards --> */}
    </>
  );
}
