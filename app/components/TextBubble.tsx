import Image from "next/image";

type TextBubble = {
  modifier?: string | null;
  text: string;
  src?: string | null;
};

export default function TextBubble({ modifier, text, src = null }: TextBubble) {
  return (
    <span
      className={`flex gap-x-1 px-2 py-1 rounded-md border border-gray-500/30 ${modifier}`}
    >
      {src && <Image width={100} height={100} src={src} alt="" />} {text}
    </span>
  );
}
