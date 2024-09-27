import { cn } from "@/lib/utils";
import { useState } from "react";

const options = [
  {
    title: "NMN",
  },
  {
    title: "트렌스-레스베라트롤",
  },
  {
    title: "비타민 K2+D3",
  },
  {
    title: "아피제닌",
  },
  {
    title: "피세틴",
  },
  {
    title: "케르세틴",
  },
  {
    title: "Coq10",
  },
  {
    title: "Tmg",
  },
  {
    title: "Lutein",
  },
  {
    title: "MSM",
  },
];

export default function Page6() {
  const [select, setSelect] = useState(0);
  return (
    <div className="min-h-screen bg-[#f7d6e9] w-full flex flex-col justify-center items-center text-center xl:py-0 py-12">
      <h1 className="text-[40px] font-semibold leading-[48.5px]">
        라라비타 스토어
      </h1>
      <div className="flex flex-wrap justify-center items-center xl:gap-10 gap-5 mt-[58px] pb-[50px]">
        {options.map(({ title }, optionIndex) => (
          <span
            onClick={() => setSelect(optionIndex)}
            key={optionIndex}
            className={cn("text-lg cursor-pointer rounded-full", {
              "font-semibold p-[13px_19px_11px_20px] bg-[#f2599c]":
                optionIndex === select,
            })}
          >
            {title}
          </span>
        ))}
      </div>
      <div className="flex xl:flex-row flex-col gap-[31px]">
        <div className="flex flex-col bg-white gap-8">
          <img src="/img/product-img-box.png" alt="" />
          <div>
            <h1 className="font-semibold text-2xl">NMN 파우더</h1>
            <p className="text-muted-foreground leading-6">
              남자의 관절, 연골 건강에 도움을 줄 수 있는 <br /> 제품입니다.
              관절&연골 건강기능성 제품
            </p>
          </div>
          <div className="flex flex-col h-full">
            <div className="bg-muted-foreground h-[2px] w-full" />
            <div className="justify-center items-center gap-2 flex py-3">
              <span className="line-through text-muted-foreground text-sm">
                67,000원
              </span>
              <span className="text-[18.5px] font-semibold">56,900원</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white gap-8">
          <img src="/img/product-img-box.png" alt="" />
          <div>
            <h1 className="font-semibold text-2xl">NMN 파우더</h1>
            <p className="text-muted-foreground leading-6">
              남자의 관절, 연골 건강에 도움을 줄 수 있는 <br /> 제품입니다.
              관절&연골 건강기능성 제품
            </p>
          </div>
          <div className="flex flex-col h-full">
            <div className="bg-muted-foreground h-[2px] w-full" />
            <div className="justify-center items-center gap-2 flex py-3">
              <span className="line-through text-muted-foreground text-sm">
                67,000원
              </span>
              <span className="text-[18.5px] font-semibold">56,900원</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white gap-8">
          <img src="/img/product-img-box.png" alt="" />
          <div>
            <h1 className="font-semibold text-2xl">NMN 파우더</h1>
            <p className="text-muted-foreground leading-6">
              남자의 관절, 연골 건강에 도움을 줄 수 있는 <br /> 제품입니다.
              관절&연골 건강기능성 제품
            </p>
          </div>
          <div className="flex flex-col h-full">
            <div className="bg-muted-foreground h-[2px] w-full" />
            <div className="justify-center items-center gap-2 flex py-3">
              <span className="line-through text-muted-foreground text-sm">
                67,000원
              </span>
              <span className="text-[18.5px] font-semibold">56,900원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
