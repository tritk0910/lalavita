import { cn } from "@/lib/utils";

const list = [
  {
    img: "/img/main-illust-05-1.png",
    title: "노화 억제 및 세포 활성화",
    desc: "NAD+는 신체 기능을 유지하며 수많은 세포에서 중요한 역할을 합니다. NMN 섭취를 통해 세포에서의 NAD+ 수치를 높이고 신체 기능 향상과 노화를 억제합니다.",
    tag: ["#신체기능향상", "#노화억제"],
  },
  {
    img: "/img/main-illust-05-2.png",
    title: "활성 산소 중의 미토콘드리아생성 및 생체 에너지 보호",
    desc: "NMN은 미토콘드리아 산화 스트레스를 약화시키고 노화된 뇌 미세혈관 내피 세포에서 미토콘드리아 생체 에너지를 향상시킵니다.",
    tag: ["#신체기능향상", "#노화억제"],
  },
  {
    img: "/img/main-illust-05-3.png",
    title: "혈액순환 촉진 및 심장 기능개선 기능",
    desc: "연구 결과, 신체 국소에 빈혈을 예방하는 효과가 있다고 합니다. SIRT1을 활성화함으로써 심장을 보호하고 혈액순환을 촉진시킵니다.",
    tag: ["#신체기능향상", "#노화억제"],
  },
  {
    img: "/img/main-illust-05-4.png",
    title: "세포 에너지 증가",
    desc: "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다",
    tag: ["#신체기능향상", "#노화억제"],
  },
  {
    img: "/img/main-illust-05-5.png",
    title: "세포 에너지 증가",
    desc: "미토콘드리아 ATP 생산과 막 전위에는 보편적인 보조인자 니코틴아미드 아데닌 뉴클레오티드(NAD)가 필요합니다. NMN은 세포에서 NAD로 전환하여 세포 에너지를 증가시킵니다",
    tag: ["#신체기능향상", "#노화억제"],
  },
];

export default function Page5() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-x-hidden">
      <div className="flex w-full justify-between xl:px-[227px] px-20 flex-row pb-[68px]">
        <div>
          <span className="text-[#42c0cc] leading-[30px] font-semibold text-lg pb-[29px]">
            NMN의 효능, 효과
          </span>
          <h1 className="xl:text-[40px] text-3xl xl:leading-[48.5px] font-semibold">
            NMN의 효능과 효과를 <br />한 눈에 살펴보세요.
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[24px] leading-[48.5px] pr-[32px]">1/7</span>
          <div className="space-x-[14px] flex">
            <img src="/img/circle-arrow-l-off.png" alt="" />
            <img src="/img/circle-arrow-r-on.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col gap-10 xl:translate-x-[10%] text-center xl:text-start">
        {list.map((item, itemIndex) => (
          <div key={itemIndex} className="flex w-full justify-between items-center flex-col px-10 xl:px-0">
            <div className="pb-[33px]">
              <img src={item.img} alt="" className="xl:scale-100 scale-75" />
            </div>
            <h1 className="font-semibold text-2xl">{item.title}</h1>
            <p className="text-muted-foreground text-base">{item.desc}</p>
            <div className="flex gap-[10px]">
              {item.tag.map((tag, index) => (
                <span
                  key={index}
                  className={cn(
                    "font-semibold text-sm px-[20px] py-[13px] rounded-full mt-[40px]",
                    {
                      "text-[#f0a72e] bg-[#fff5c5]": index === 0,
                      "text-[#42c0cc] bg-[#e4f6f7]": index === 1,
                      "text-muted-foreground bg-[#f5f5f5]": itemIndex !== 0,
                    }
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
