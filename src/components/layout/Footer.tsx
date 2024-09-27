import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  content: React.JSX.Element;
}

const items: Props[] = [
  {
    title: "Address",
    content: (
      <>
        1234, Dosan-daero 1-gil,
        <br />
        oopsee Building
      </>
    ),
  },
  {
    title: "Partnership",
    content: (
      <>
        02 1234 7890
        <br />
        oopsee@gmail.com
      </>
    ),
  },
  {
    title: "Social",
    content: (
      <>
        Youtube
        <br />
        Instagram
      </>
    ),
  },
];

export default function Footer({ className }: { className: string }) {
  return (
    <div className={cn("flex justify-between md:items-end", className)}>
      <div className="xl:pr-[389px] lg:pr-52 pr-20">
        <h1 className="xl:text-[34px] text-2xl font-bold mb-7 leading-none">Oopsee</h1>
        <div className="xl:text-xl text-sm leading-[25.5px]">
          <p>© 2022</p>
          <p>OOPSEE. All rights reserved.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-[120px]">
        {items.map((section, index) => (
          <div key={index} className="xl:text-xl leading-[25.5px]">
            <h2 className="font-semibold text-lg mb-2">{section.title}</h2>
            <p className="text-sm text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
