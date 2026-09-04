type Chip = {
  prefix: String;
  suffix: String;
  modifier: String;
};

export default function Chip({ prefix, suffix, modifier }: Chip) {
  return (
    <div className={`flex items-center gap-x-2 w-fit ${modifier}`}>
      <span>{prefix}</span>
      <div className="h-full">
        <span className="relative text-xl bottom-1">.</span>
      </div>
      <span>{suffix}</span>
    </div>
  );
}
