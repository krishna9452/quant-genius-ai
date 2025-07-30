interface StrategyEditorProps {
  code: string;
  setCode: (code: string) => void;
}

export default function StrategyEditor({ code, setCode }: StrategyEditorProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Strategy Code</h3>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 p-4 bg-gray-800 text-green-400 font-mono rounded-lg"
        placeholder="// Your strategy code here"
      />
    </div>
  );
}