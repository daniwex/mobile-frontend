
type ButtonProps = {
  modifier: string;
  onClick: () => void;
  text: string;
  disabled?: boolean;
};

export default function Button({
  modifier,
  onClick,
  text,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`${modifier} button`}
      onClick={onClick}
    >
      <div>{text}</div>
    </button>
  );
}
