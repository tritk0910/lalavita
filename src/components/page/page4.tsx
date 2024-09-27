import React from 'react';

const sections = [
  {
    title: "Advantages 1",
    heading: "99% 이상 고순도의 Uthever® NMN",
    description: "1. 가장 높은 고순도 NMN. <br /> 2. 세계 최대 시험인증기관 인터텍 인증 획득.",
    imgSrc: "/img/main-illust-04-1.png",
    bgColor: "bg-[#fed614]"
  },
  {
    title: "Advantages 2",
    heading: "높은 안전성 및유효성",
    description: "1. Effepharm에서는 Uthever® NMN에 대한 동물실험과 인체 임상실험을 통해 안정성 및 유효성 인증. <br /> 2. 흡수성과 온도에 휠씬 덜 민감하여 실온에서 보관 가능.",
    imgSrc: "/img/main-illust-04-2.png",
    bgColor: ""
  }
];

export default function Page4() {
  return (
    <div className="min-h-screen w-full flex flex-col xl:flex-row">
      {sections.map(({bgColor, description, heading, imgSrc, title}, index) => (
        <div key={index} className={`${bgColor} flex-1 flex justify-center`}>
          <div className="flex justify-center items-center flex-col text-center">
            <span className="text-[#42c0cc] font-semibold text-lg pb-[31px] xl:pt-0 pt-16">
              {title}
            </span>
            <h1 className="xl:text-[40px] text-2xl xl:leading-[48.5px] font-semibold pb-[46px] w-[310px]">
              {heading.split('<br />').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <p className="text-lg leading-[30px] w-[507px]" dangerouslySetInnerHTML={{ __html: description }} />
            <img src={imgSrc} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
