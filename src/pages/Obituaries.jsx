import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ObituaryCard from "../components/ObituaryCard/ObituaryCard";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllObituaries } from "../features/actions/obituaryActions";

// const obituaries = [
//   {
//     id: 1,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/ba529db1-6a51-4f2f-8e2d-b68d2b874bd9",
//     name: "Connie McDonald Magee",
//     date: "Dec 25, 2024",
//     description:
//       "Connie McDonald Magee passed away on December 25, 2024. Beloved wife of dedicated caregiver Wayne Magee. Mother of Michael Lester (Gabriella). Proceeded in death by her brother Craig McDonald and parents Effie and Raymond McDonald. Grandmother of Kylee Rae Lester and Haylee Rose Lester. Godmother of Ricky Landry Jr., Bradley Speiler, Ivy McDonald, and Brice and Brody Arthur. She enjoyed creating and painting beautiful things, making flower arrangements and many other activities. She will be sadly missed. Relatives and friends...",
//   },
//   {
//     id: 2,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/86d2e91c-da92-4d35-840f-0864caba0cce",
//     name: "Kevin Drew Smith",
//     date: "Dec 25, 2024",
//     description:
//       "Kevin Drew Smith passed away on Wednesday, December 25, 2024 at the age of 63. Beloved husband of the late Theresa Smith. Son of the late Earl and Joyce Smith. Brother of Earl Smith Jr. (Jo Ann), Dawn Guidry (Ronnie) and Don Smith (Tammy). Uncle of Sheri Leonard, Jenny Isaac, Drew Smith, Chasity Danos and Nancy Zerangue. Also survived by other relatives. He was employed by Entergy. He was a proud member of the Knights of Columbus Council 9240 of...",
//   },
//   {
//     id: 3,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/534a9c89-ffbe-430e-8a38-4a4ab6fc44e2",
//     name: "Charles Ellis Gautreaux",
//     date: "Dec 25, 2024",
//     description:
//       "Charles Ellis Gautreaux entered into eternal rest on December 25, 2024. Beloved husband of Deanna Dubois Gautreaux of Gretna, LA, his high school sweetheart of 57 years. Father of Julie Gautreaux and the late DeeDee Gautreaux. Son of the late Ivy Gauthreaux and Edith Parr Gauthreaux. Age 77 years, a native of Westwego, and resident of Gretna, LA. Charles was a graduate of West Jefferson High School 1967 and served in the United States Army 3 years as Sgt. E-5...",
//   },
//   {
//     id: 4,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/b2de175c-7dd6-4916-a81b-fbc8f97be2af",
//     name: "William H. `Bill` Wagner, Jr.",
//     date: "Dec 25, 2024",
//     description:
//       "William H. “Bill” Wagner, Jr. entered into eternal rest on Wednesday, December 25, 2024 at the age of 88. Beloved and loving husband of Mary Ann Wagner for 58 years. Son of the late William H. Wagner, Sr. and Camille Costello Wagner. Devoted father of William David Wagner. Beloved brother of David Wagner. Uncle of David Wagner and Adam Wagner. Bill was born in Algiers, Louisiana and was a resident of Belle Chasse, Louisiana for the past 30 years. He...",
//   },
//   {
//     id: 5,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/e64c13ee-41d6-4c1a-bba4-5165e2df9b6a",
//     name: "Margianne Encalade LeBeau",
//     date: "Dec 24, 2024",
//     description:
//       "Margianne Encalade LeBeau passed away peacefully on December 24, 2024 at the age of 86. Beloved wife of the late Paul Anthony LeBeau. Loving mother of Kim Wilson (Charles), Melissa Kersey (Louie), Yvette Perrin (Merlin), Ken LeBeau (Pam), and the late Paul LeBeau Jr. (the late Lucy). Sister of Margie Encalade, Michael Encalade (Jenny), Leslie Encalade (Patricia), and the late Edward “Woody” Encalade (Mary Ann). Daughter of the late Edward Encalade and Victoria Gisclair Encalade. Also survived by 12 grandchildren,...",
//   },
//   {
//     id: 6,
//     imgUrl:
//       "https://cdn.tukioswebsites.com/obituary_profile_photo/md/32982af8-9988-40a4-b1bf-db7b1fff4810",
//     name: "Ricky Ngoc Doan",
//     date: "Dec 23, 2024",
//     description: "Robert's legacy is one of kindness, compassion, and love.",
//   },
// ];

const Obituaries = () => {
  const dispatch = useDispatch();
  const { obituaries } = useSelector((state) => state.obituaries);

  useEffect(() => {
    dispatch(getAllObituaries({ page: 1 }));
  }, []);

  console.log(obituaries, "my obi data");

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };
  return (
    <div>
      <HeroSection
        title="Obituaries"
        subtitle=""
        image="https://ewscripps.brightspotcdn.com/dims4/default/c7c14bb/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F41%2F18%2F7cb698c94766a6d132f010e9a077%2Fobits-sept-29.jpg"
      />

      <div className="mx-12">
        <div className="grid grid-cols-[80%_auto]">
          <div className="">
            <h1 className="text-4xl font-bold text-green-800 mt-5">
              Local Obituaries in New Orleans, Harvey & Marrero, LA.
            </h1>

            <div className="mt-5 flex items-center justify-center">
              <button className="px-4 py-2 border border-green-800 rounded-full text-green-800 hover:cursor-pointer hover:bg-green-800 hover:text-white">
                Plan Now
              </button>
            </div>

            <div className="flex items-center justify-center mt-3">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>

          <div className="">
            <h1 className="text-4xl font-bold mt-5"> Pre-Plan Now </h1>
            <p className="text-xl mt-3 text-center">
              Get more information on pre-arrangements by clicking the button
              below.
            </p>

            <div className="flex items-center justify-center mt-3">
              <button className="px-4 py-2 bg-green-800 rounded-full w-[120%] text-xl text-white hover:cursor-pointer hover:bg-green-600">
                Plan Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[80%_auto]">
        <div className="flex flex-col gap-2">
          {Array.isArray(obituaries) &&
            obituaries.map((obituary, index) => (
              <ObituaryCard
                key={index}
                id={obituary._id}
                name={obituary.name}
                description={obituary.description}
                date={obituary.date}
                image={obituary.image}
                banner={obituary.banner}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Obituaries;
