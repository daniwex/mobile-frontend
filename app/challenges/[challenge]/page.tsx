"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import challenges from "../../../src/content/challenges/data.json";
import Image from "next/image";
import Chip from "@/app/components/Chip";
import Button from "@/app/components/Button";

type Challenge = {
  id: string;
  name: String;
  detail: String;
  estimate: String;
  difficulty: String;
  category: String[];
  level: String;
  feature: String;
  src: string;
  single: string
};

export default function page() {
  const params = useParams();
  let id = params.challenge as string;
  const [currChallenge, setCurrChallenge] = useState<Challenge>();

  function findChallenge(id: string): Challenge | null {
    return challenges.find((ch) => ch.id == id);
  }

  useEffect(() => {
    const ch = findChallenge(id);
    setCurrChallenge(ch);
  }, []);
  return (
    <div className="home-section">
      {currChallenge && (
        <div className="">
          <div className="md:flex">
            <div className="">
              <Chip
                prefix={currChallenge.difficulty.toUpperCase()}
                suffix={currChallenge.feature.toUpperCase()}
                modifier="text-[#e63946] mb-7"
              />
              <div className="md:flex md:flex-col gap-y-5">
                <p className="h2 font-bold">{currChallenge.name}</p>
                <p className="md:w-3/4 text-gray-500/80 text-xl">
                  {currChallenge.detail}
                </p>
                <div className="flex gap-x-3">
                  <Button
                    text="Start challenge"
                    onClick={() => {}}
                    modifier="bg-[#e63946] text-white h-[45px]"
                  />
                  <Button
                    disabled={true}
                    text="View submissions"
                    onClick={() => {}}
                    modifier="bg-white border border-gray-500/50 h-[45px]"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <Image
                className=""
                // objectFit="fill"
                width={550}
                height={300}
                src={currChallenge.single}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
