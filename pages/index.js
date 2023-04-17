import { Inter } from "next/font/google";
import { ChevronDownIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [geo, setGeo] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);

  console.log(quote);

  const getQuote = async () => {
    const url = "https://api.quotable.io/random";
    await axios
      .get(url)
      .then(function (response) {
        // handle success
        setError(null);
        setQuote(response.data);
      })
      .catch(function (err) {
        // handle error
        setError("No results");
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <main
      className={`${inter.className} relative grid grid-cols-1 w-full min-h-screen px-40 py-14 bg-mobile-daytime md:bg-tablet-daytime lg:bg-desktop-daytime bg-no-repeat bg-cover text-white`}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="flex flex-col justify-between z-20">
        <div>
          <h1 className="text-lg flex-grow flex flex-col gap-3 max-w-lg">
            {quote ? (
              <>
                <p className="font-light tracking-wide italic">
                  "{quote.content}"
                </p>
                <span className="font-bold">{quote.author}</span>
              </>
            ) : null}
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 uppercase font-light tracking-[0.3em] items-center">
            <span>
              <SunIcon className="h-6 w-6" />
            </span>
            <span>good morning, it's currently</span>
          </p>
          <div className="flex w-full items-baseline gap-3">
            <h2 className="text-[12.5rem] leading-[12.5rem] font-bold">
              11:00
            </h2>{" "}
            <span className="text-[2.5rem] leading-7 font-light tracking-[0.3em]">
              EST
            </span>
          </div>
          <div className="flex justify-between w-full items-center">
            <span className="font-bold tracking-[0.3em] uppercase bg-black/50 mix-blend-normal rounded-full px-3 py-2">
              in stamford, ct
            </span>
            <button className="bg-white rounded-full px-3 py-2 inline-flex items-center gap-3">
              <span className="tracking-[5px] uppercase text-black/50 bg-blend text-xl font-bold">
                more
              </span>
              <span className="bg-[#303030] rounded-full flex justify-center items-center h-10 w-10">
                <ChevronDownIcon className="h-6 w-6" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
