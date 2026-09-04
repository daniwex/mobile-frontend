type Code = {
  fileName: String;
  language: String;
  code: String;
};

export default function CodeBlock({ fileName, language, code }: Code) {
  return (
    <div>
      <div className="w-full bg-zinc-100 h-[50px] text-white rounded-t-xl">
        <span className="bg-[#252422] block w-[180px] flex items-center justify-center px-4 rounded-ss-xl h-[50px] text-sm">
          {fileName}
        </span>
      </div>
      <pre className="overflow-x-auto bg-[#252422] p-6 text-sm text-zinc-100">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
