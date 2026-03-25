import { type ReactNode } from "react";

function HighlightText({ children }: { children: ReactNode }) {
  return <span className="highlightText">{children}</span>;
}

export default HighlightText;
