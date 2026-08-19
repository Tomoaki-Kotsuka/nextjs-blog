"use client";

import { useState } from "react";

export function Collapsible({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? "閉じる" : "開く"}
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}
