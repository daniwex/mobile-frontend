import React from "react";
import Button from "./Button";
import FeatureBlock from "./FeatureBlock";
import Divider from "./Divider";

type card = {
  label: String;
  price: String;
  type: String;
  onClick: () => void;
  feature: String[];
};

export default function Card({ label, price, type, onClick, feature }: card) {
  const isPro = type == "pro";
  return (
    <div className="">
      {isPro && (
        <div className="border p-1 rounded-t-[20px] bg-sky-red-300 text-white border-[#e63946] text-center">
          <p>Most popular</p>
        </div>
      )}
      <div
        className={`relative card py-3 ${isPro ? "popular-card border border-[#e63946]" : "rounded-[20px]"}`}
      >
        <div className="px-[19px]">
          <div>
            <p className="h5">{label}</p>
            <p className="h4 pt-5">
              {price} <span className="text-sm">/ month</span>
            </p>
          </div>
          <Divider modifier="my-4 border-gray-500/20" />
          <div className="grid gap-y-2">
            {feature.map((item, index) => (
              <FeatureBlock key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="w-full px-[19px] pb-4 mt-8 absolute bottom-0">
          <Button
            modifier={`w-full  h-[40px] ${isPro ? "bg-sky-red-300 text-white" : "bg-gray-500/20 text-dark"}`}
            onClick={onClick}
            text="Get started"
          />
        </div>
      </div>
    </div>
  );
}
