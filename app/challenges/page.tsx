"use client";

import { useState } from "react";
import challenges from "../../src/content/challenges/data.json";
import { useRouter } from "next/navigation";
import Challege from "../components/Challege";

export default function page() {
  const router = useRouter();
  const [showSettingPane, setShowSettingPane] = useState(false);
  const navigateToChallenge = (id: string) => {
    router.push(`challenges/${id}`)
  }
  return (
    <div className="home-section py-10">
      <div className="w-full ">
        <p className="h2">Challenges</p>
      </div>

      <div className="mt-2">
        <h3 className="h3">
          All difficulties.{" "}
          <span className="text-gray-500/80">Take your pick.</span>
        </h3>
      </div>
      {/* <Bubble onClick={() => {}} /> */}
      <div className="grid md:grid-cols-3 md:gap-x-2 gap-y-7 md:mt-10 mt-4 w-full">
        {challenges.map((challenge, index) => (
          <Challege
            onClick={(id) => navigateToChallenge(id)}
            id={challenge.id}
            key={index}
            name={challenge.name}
            detail={challenge.detail}
            estimate={challenge.estimate}
            difficulty={challenge.difficulty}
            category={challenge.category}
            level={challenge.level}
            feature={challenge.feature}
            src={challenge.src}
          />
        ))}
      </div>
    </div>
  );
}
