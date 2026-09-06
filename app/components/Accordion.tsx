"use client";

import { useState } from "react";
import { RequirementSection } from "../utils/common";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type AccordionData = {
  modifier?: string;
  index: number;
  defaultExpanded: boolean;
  data: RequirementSection;
};

export default function Accordion({
  modifier,
  index,
  defaultExpanded,
  data,
}: AccordionData) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return (
    <div
      className={`list-decimal border border-gray-500/30 rounded-md py-2 px-5 ${modifier}`}
    >
      <button
        type="button"
        className="w-full flex gap-x-4 text-left"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="w-10 h-10 rounded-full text-white bg-[#e63946] flex items-center justify-center">
          <span>{index}</span>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="h3 font-bold">{data.title}</span>
          <span className="text-sm">{data.description}</span>
          {isExpanded && (
            <ul className="flex flex-col mt-3 gap-y-1 text-sm list-disc list-inside">
              {data.items.map((el) => (
                <li className="" key={el}>
                  {el}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex h-10 w-10 flex items-center justify-center">
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>
    </div>
  );
}
