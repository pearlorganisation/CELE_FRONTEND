import { Heart, Flower, Calendar, BookOpen, Users, CandlestickChartIcon as Candle } from "lucide-react";

export default function MemorialsPage() {
  const memorialServices = [
    {
      title: "Online Memorials",
      description:
        "Create a lasting digital tribute to honor and remember your loved one. Share memories, photos, and condolences.",
      icon: <Heart className="h-6 w-6" />,
      link: "#create-memorial",
    },
    {
      title: "Memorial Services",
      description:
        "Plan a meaningful memorial service with our experienced staff. We'll help you create a personalized celebration of life.",
      icon: <Flower className="h-6 w-6" />,
      link: "#services",
    },
    {
      title: "Grief Resources",
      description:
        "Access our library of grief support materials, articles, and resources to help you through this difficult time.",
      icon: <BookOpen className="h-6 w-6" />,
      link: "#resources",
    },
    {
      title: "Support Groups",
      description:
        "Join our caring community in regular support group meetings. Share experiences and find comfort with others.",
      icon: <Users className="h-6 w-6" />,
      link: "#support",
    },
    {
      title: "Memorial Events",
      description: "View upcoming memorial events and remembrance ceremonies in our community.",
      icon: <Calendar className="h-6 w-6" />,
      link: "#events",
    },
    {
      title: "Remembrance Items",
      description:
        "Browse our selection of memorial keepsakes, candles, and remembrance items to honor your loved one.",
      icon: <Candle className="h-6 w-6" />,
      link: "#items",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://static.independent.co.uk/2022/09/10/15/newFile-1.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp')" }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Memorials & Remembrance</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl">
            Honor and remember your loved ones with dignity and compassion
          </p>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-green-800 text-white py-3">
        <div className="container mx-auto flex justify-center space-x-8 text-sm overflow-x-auto">
          <a href="#memorials" className="hover:underline whitespace-nowrap">ONLINE MEMORIALS</a>
          <a href="#services" className="hover:underline whitespace-nowrap">MEMORIAL SERVICES</a>
          <a href="#resources" className="hover:underline whitespace-nowrap">GRIEF SUPPORT</a>
          <a href="#events" className="hover:underline whitespace-nowrap">UPCOMING EVENTS</a>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Introduction Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl text-green-800 font-bold mb-6">Creating Lasting Memories</h2>
            <p className="text-gray-600 mb-8">
              We understand that memorializing your loved one is an important part of the grieving process. Our memorial
              services and resources are designed to help you create meaningful ways to remember and honor their legacy.
            </p>
          </div>

          {/* Memorial Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {memorialServices.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4 text-green-800">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="text-green-800 hover:text-green-900 underline">Learn More →</a>
              </div>
            ))}
          </div>

          {/* Grief Support Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl text-green-800 font-bold mb-4">Need Support?</h2>
              <p className="text-gray-600 mb-6">
                Our grief counselors and support groups are here to help you through this difficult time. We offer both
                individual counseling and group support sessions.
              </p>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl text-green-800 font-bold text-center mb-6">Upcoming Memorial Events</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((event, index) => (
                <div key={index} className="p-4 border rounded-lg shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-50 text-green-800 p-3 rounded-lg">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Annual Remembrance Ceremony</h3>
                      <p className="text-sm text-gray-600 mb-2">December {index + 15}, 2024 • 2:00 PM</p>
                      <p className="text-sm text-gray-600">
                        Join us for our annual ceremony to remember and honor our loved ones during the holiday season.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
