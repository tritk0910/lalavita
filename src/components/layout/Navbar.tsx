"use client";
import { AlignJustify } from "lucide-react";
import React from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {;
  return (
    <div className="p-10 md:p-20 flex justify-between items-center fixed w-full top-0 z-20 pointer-events-none">
      {children}
      <div className="flex flex-col items-end">
        <AlignJustify size={36} strokeWidth={0.5} />
        <div className="flex gap-3">
          <span className="text-[#42c0cc]">KR</span>
          EN
        </div>
      </div>
    </div>
  );
}
