"use client";

import { useEffect, useState } from "react";
import getData from "../test/RandomUser";

interface RandomUser {
  picture: any;
  name: any;
  email: any;
}

export default function TeamsSection() {
  const [randomUsers, setRandomUsers] = useState<RandomUser[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(); // Panggil getData
      setRandomUsers(data?.results); // Atur data yang diperoleh ke dalam state
    };

    fetchData();
  }, []);

  return (
    <div className="mt-[100px] ">
      <div className="text-center">
        <h1 className="text-[22px] mb-2.5 tracking-[2.86px] font-light">
          OUR TEAM
        </h1>
        <h3 className="text-[52px]">Meet The Team</h3>
        <div className="flex justify-center gap-10 items-center mt-[40px]">
          {randomUsers?.map((user, index) => {
            return (
              <div
                key={index}
                className="rounded-[25px] bg-amber-100/20 shadow-lg hover:bg-amber-200 transition-all duration-700 hover:scale-110 hover:rotate-2 w-[370px] h-[370px] justify-center flex flex-col items-center "
              >
                <img
                  src={user.picture.large}
                  alt={`Profile ${user.name.first} ${user.name.last}`}
                  className="mb-[28px] rounded-full w-[130px] h-[130px]"
                />
                <p className="font-bold mb-[16px] text-[22px]">{`${user.name.first} ${user.name.last}`}</p>
                <p className="font-light text-[18px]">{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
