type NavChip = {
  modifier?: string;
  previous: string;
  current: string;
  onClickPrevious: () => void;
};

export default function NavChip({
  modifier,
  previous,
  current,
  onClickPrevious,
}: NavChip) {
  return (
    <div className={`flex gap-x-2 ${modifier} items-center`}>
      <span className="cursor-pointer text-sm" onClick={onClickPrevious}>{previous}</span>
      <span>/</span>
      <span className="text-2xl text-gray-500/40">{current}</span>
    </div>
  );
}
