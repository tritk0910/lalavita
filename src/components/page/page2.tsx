import { cn } from "@/lib/utils";

export default function Page2() {
  interface Data {
    title: string;
    icon: string;
    content: string;
    color: string;
  }

  const data: Data[] = [
    {
      title: "인체의 NAD+ 균형유지를 위해",
      icon: "/img/main-illust-02-1.png",
      content:
        "인체에서 에너지 생성, 대사 및 유전자 발현에 중요한 역할을 하는 NAD+ 는 모든 살아 있는 세포에서 발견되는 보조인자입니다. 사람은 나이가 들수록 가졌던 NAD+ 수준이 감소하여 노화 속도가 빨라지고 관련 신체 건강 상태도 나빠지기도 합니다.",
      color: "white",
    },
    {
      title: "인체 내의 주요 세포에너지원",
      icon: "/img/main-illust-02-2.png",
      content:
        "니코틴아마이드 모노뉴클레오타이드(NMN)는 인체 내의 주요 세포 에너지원 중에 하나입니다. 감소된 NAD+ 를 보충제 역할을 함으로써 노화를 늦추는 효과가 있으며, 건강을 향상시키는데 도움이 됩니다.",
      color: "#42c0cc",
    },
    {
      title: "젊음 유지 및 노화 억제에탁월한 효과",
      icon: "/img/main-illust-02-3.png",
      content:
        "NMN은 노화를 되돌릴 뿐만 아니라 관련된 질병을 억제하는데 효과적입니다. 연구를 진행한 결과, NMN가 노화로 인한 세포 손상, 신경 퇴행, 심장기능 악화 등의 문제 개선과 젊음을 유지하는데 효과가 있다는 것을 발견했습니다.",
      color: "white",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-center xl:gap-[100px] gap-6 items-center bg-[#fed614] py-[180px] xl:py-0">
      <div className="flex flex-col text-center gap-8">
        <span className="text-[#42c0cc] font-semibold">NMN는 왜 중요할까요?</span>
        <p className="xl:text-[40px] lg:text-3xl text-2xl xl:leading-[48px] lg:leading-9">
          “노화는 질병, 그것도 치료할 수 있는 질병에 불과하다. <br />
          그리고 이것에 가장 근접한 물질은 ‘<strong>NMN</strong>’이다.”
        </p>
        <span className="text-[17.5px]">
          미국 하버드대학교 의과대학 블라바트닉 연구소 유전학 데이비드 싱클레어
          교수
        </span>
      </div>
      <div className="flex lg:flex-row flex-col gap-[30px] xl:px-[230px] px-4">
        {data.map(({ color, content, icon, title }, idx) => (
          <div
            key={idx}
            className="rounded-lg px-[41px] pt-[48px] pb-[74px]"
            style={{ backgroundColor: color }}
          >
            <img src={icon} alt="" className="pb-8" />
            <h1 className="text-[32px] leading-10 font-semibold pb-9 w-[238px]">
              {title}
            </h1>
            <p
              className={cn("text-lg", {
                "text-muted-foreground": color === "white",
              })}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
