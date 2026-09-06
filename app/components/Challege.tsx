import Image from "next/image";
import Chip from "@/app/components/Chip";

type Challenge = {
  slug: string;
  name: String;
  detail: String;
  estimate: String;
  difficulty: String;
  category: String[];
  level: String;
  feature: String;
  src: string;
  onClick: (arg0: string) => void;
};

export default function Challege({
  slug,
  name,
  detail,
  estimate,
  difficulty,
  category,
  level,
  feature,
  src,
  onClick,
}: Challenge) {
  return (
    <div
      onClick={() => onClick(slug)}
      className="border border-gray-500/20 rounded-lg cursor-pointer"
    >
      <div className="flex gap-x-7 flex-col">
        <div className="h-[300] overflow-hidden">
          <Image
            className=""
            objectFit="fill"
            width={500}
            height={300}
            src={src}
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="flex w-full gap-x-2 text-sm">
            <Chip
              prefix={difficulty.toUpperCase()}
              suffix={feature.toUpperCase()}
              modifier="text-[#e63946] mb-7"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="h4">{name}</p>
            <div className="w-full">
              <p className="">{detail}</p>
            </div>
            <div className="flex gap-x-2">
              <span>{estimate}</span>
              <span>{difficulty}</span>
            </div>
            <div>
              {category.map((cat, index) => (
                <span key={index}>{cat}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
