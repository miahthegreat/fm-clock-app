import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} relative grid grid-cols-1 w-full min-h-screen px-40 py-14 bg-mobile-daytime md:bg-tablet-daytime lg:bg-desktop-daytime bg-no-repeat bg-cover text-white`}
    >
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="flex flex-col justify-between z-20">
        <div>
          <h1 className="text-2xl flex-grow">PARAGRAPH THINGS</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="uppercase">good morning, it's currently</p>
          <div className="flex w-full items-baseline gap-3">
            <h2 className="text-[12.5rem] leading-[12.5rem] font-bold">
              11:00
            </h2>{" "}
            <span className="text-[2.5rem] leading-7 font-light">EST</span>
          </div>
          <div className="flex justify-between w-full items-center">
            <span className="font-bold tracking-wider">IN STAMFORD, CT</span>
            <button>MORE</button>
          </div>
        </div>
      </div>
    </main>
  );
}
