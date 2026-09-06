"use client";
import { useState } from "react";
import details from "../../src/content/challenges/challenges.json";
import TextBubble from "../components/TextBubble";
import { Tab, renderTabContent } from "../utils/common";
import { Challenge } from "../utils/common";

export default function DetailBody({ slug }: { slug: string }) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const tabDetails = details.find((el) => el.slug == slug) as Challenge;

  return (
    <div className="md:my-10">
      <div className="border-b border-gray-500/30 home-section pb-3">
        <div className="flex flex-row md:gap-x-10">
          <span
            onClick={() => setActiveTab("overview")}
            className={`cursor-pointer ${activeTab == "overview" ? "text-[#e63946]" : "text-black"}`}
          >
            Overview
          </span>
          <span
            onClick={() => setActiveTab("requirements")}
            className={`cursor-pointer ${activeTab == "requirements" ? "text-[#e63946]" : "text-black"}`}
          >
            Requirements
          </span>
          <span
            onClick={() => setActiveTab("assets")}
            className={`cursor-pointer ${activeTab == "assets" ? "text-[#e63946]" : "text-black"}`}
          >
            Assets
          </span>
          <span
            onClick={() => setActiveTab("submissions")}
            className={`cursor-pointer ${activeTab == "submissions" ? "text-[#e63946]" : "text-black"}`}
          >
            Submissions
          </span>
        </div>
      </div>
      <div className="home-section md:mt-5">
        <div className="md:grid md:grid-cols-3 gap-x-2">
          <div className="col-span-2">
            {renderTabContent(activeTab, tabDetails)}
          </div>
          <div className="border border-gray-500/30 rounded-md ">
            <div className="md:flex flex-col px-7 py-3 md:gap-y-5">
              <div className="grid grid-cols-2 border-b border-gray-500/10 items-center text-sm py-2">
                <span className="">Difficulty</span>
                <span className="">{tabDetails?.difficulty}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-500/10 items-center text-sm py-2">
                <span>Access</span>
                <span className="">{tabDetails?.access}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-500/10 items-center text-sm py-2">
                <span>Estimated time</span>
                <span className="">
                  {tabDetails?.estimatedTime.minHours} -{" "}
                  {tabDetails?.estimatedTime.maxHours} hrs
                </span>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-500/10 items-center text-sm py-2">
                <span>Screens</span>
                <span className="">{tabDetails?.screens}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-gray-500/10 items-center text-sm py-2">
                <span>Platforms</span>
                <span className="">{tabDetails?.difficulty}</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span>Submission</span>
                <span className="">{tabDetails?.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
