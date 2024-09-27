import { cn } from "@/lib/utils";
import React, { useState } from "react";
import "./style.css";

export interface CardProps {
  title: string;
  header: string;
  description: string;
  imageActivate: string;
  imageDeactivate: string;
  tag: string[];
}

export default function Card({
  title,
  header,
  description,
  imageActivate,
  imageDeactivate,
  tag,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-container perspective-1000">
      <div
        className={`card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "is-flipped" : ""
        }`}
        onClick={handleCardClick}
      >
        <div
          className="card-front absolute w-full h-full backface-hidden flex flex-col justify-between px-[54px] py-[58px] cursor-pointer"
          style={{ backgroundImage: `url('${imageDeactivate}')` }}
        >
          <h1 className="uppercase font-semibold text-[40px] leading-[47.5px] w-36">
            {title}
          </h1>
          <div>
            <div className="pt-[39px]">
              {tag.map((t, i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-full px-6 py-3 uppercase text-lg font-semibold mr-2 bg-white",
                    {
                      "text-[#7226ff]": title === "X-ARA M/V",
                      "text-[#ffd614]": title === "X-ARA Beauty",
                      "text-[#658eea]": title === "X-ARA Movie",
                      "text-[#41c1cc]": title === "X-ARA Animation",
                    }
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          className="card-back absolute w-full h-full backface-hidden transform rotate-y-180 flex flex-col justify-between px-[54px] py-[58px] cursor-pointer"
          style={{ backgroundImage: `url('${imageActivate}')` }}
        >
          <h1 className="uppercase font-semibold text-[40px] leading-[47.5px] w-36">
            {title}
          </h1>
          <div>
            <h1 className="font-semibold text-3xl leading-[47.5px]">
              {header}
            </h1>
            <span className="text-[17.5px] leading-7">{description}</span>
            <div className="pt-[39px]">
              {tag.map((t, i) => (
                <span
                  key={i}
                  className={cn(
                    "rounded-full px-6 py-3 uppercase text-lg font-semibold mr-2",
                    {
                      "bg-[#fff0ab] text-[#ffaa00]": i === 0,
                      "bg-[#fad9ec] text-[#e86db0]": i === 1,
                      "bg-[#ededed] text-[#999999]": t === "soon",
                    }
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
