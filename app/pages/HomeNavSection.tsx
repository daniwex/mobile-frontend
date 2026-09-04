"use client";
import Button from "../components/Button";
import ContentToggle from "../components/ContentToggle";

export default function HomeNavSection() {
  return (
    <div className="w-full home-section">
      <div className="">
        <p>FOR MOBILE DEVELOPERS</p>
        <h2 className="h2 my-4">
          Build apps. <br></br>Become a better. <br></br>mobile developer.
        </h2>
        <div className="">
          <p className="text-gray-500/80 text-xl">
            Real-world mobile challenges for Android, IOS, Flutter and React
            Native
          </p>
          <div className="flex gap-x-4 w-full mt-4">
            <Button
              onClick={() => {}}
              modifier="bg-sky-red-300 text-white"
              text="Start a Challenge"
            />
            <Button
              onClick={() => {}}
              modifier="bg-[#1b263b] text-white"
              text="How it works"
            />
          </div>
        </div>
      </div>
      <div className="w-full my-5">
        <div className="w-full text-center my-4">
          <p className="text-xl font-semibold">Build it your way.</p>
          <p className="text-gray-500/80 ">One challenge. Your favorite mobile stack.</p>
        </div>
        <ContentToggle />
      </div>
    </div>
  );
}
