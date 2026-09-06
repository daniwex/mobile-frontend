"use client";

import { useParams, useRouter } from "next/navigation";
import challenges from "../../../src/content/challenges/challenges.json";
import Image from "next/image";
import Chip from "@/app/components/Chip";
import Button from "@/app/components/Button";
import DetailBody from "@/app/pages/DetailBody";
import NavChip from "@/app/components/NavChip";

export default function page() {
  const params = useParams<{ challenge: string }>();
  const router = useRouter();
  const slug = params.challenge;
  const currChallenge = challenges.find((challenge) => challenge.slug == slug);

  return (
    <div className="py-10">
      {currChallenge && (
        <div className="">
          <div className="home-section md:mb-10">
            <NavChip
              current={currChallenge.title}
              previous="Challenges"
              onClickPrevious={() => router.back()}
            />
          </div>
          <div className="md:flex home-section">
            <div className="">
              <Chip
                prefix={currChallenge.difficulty.toUpperCase()}
                suffix={currChallenge.access.toUpperCase()}
                modifier="text-[#e63946] mb-7"
              />
              <div className="md:flex md:flex-col gap-y-5">
                <p className="h2 font-bold">{currChallenge.title}</p>
                <p className="md:w-3/4 text-gray-500/80 text-xl">
                  {currChallenge.description}
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
                width={950}
                height={300}
                src={currChallenge.single}
                alt=""
              />
            </div>
          </div>
          <div>
            <DetailBody slug={slug} />
          </div>
        </div>
      )}
    </div>
  );
}
