
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface APICodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const APICodeBlock = ({
  code,
  language = "bash",
  title,
  className,
}: APICodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="bg-secondary/70 px-4 py-2 text-sm font-mono flex items-center justify-between">
          <span>{title}</span>
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span>{language}</span>
          </div>
        </div>
      )}
      <div className="relative group">
        <pre className="bg-secondary/30 p-4 overflow-x-auto scrollbar-thin language-bash">
          <code className="text-sm font-mono text-white/90">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>
    </div>
  );
};

export default APICodeBlock;
