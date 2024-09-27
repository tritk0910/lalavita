const imgs = [
  {
    path: "/img/main-letter-1.png",
  },
  {
    path: "/img/main-letter-2.png",
  },
  {
    path: "/img/main-letter-3.png",
  },
  {
    path: "/img/main-letter-4.png",
  },
];

const img2s = [
  {
    path: "/img/main-confirm-logo-1.png",
  },
  {
    path: "/img/main-confirm-logo-2.png",
  },
  {
    path: "/img/main-confirm-logo-3.png",
  },
  {
    path: "/img/main-confirm-logo-4.png",
  },
  {
    path: "/img/main-confirm-logo-5.png",
  },
];

export default function Page1() {
  return (
    <div className="min-h-screen w-full flex lg:flex-row flex-col justify-center items-center 2xl:gap-[271px] xl:gap-40 lg:gap-20 gap-0 text-center md:text-left">
      <div className="flex flex-col gap-9">
        <span className="text-[#42c0cc] font-semibold text-lg">
          왜 라라비타 NMN일까요?
        </span>
        <h1 className="text-[55.5px] leading-[72.5px] font-semibold">
          노화를 늦추고
          <br />
          건강을 지키는
          <br />
          최적의 방법
        </h1>
        <span className="text-lg">
          라라비타의 SUPERCONDRIA ®NMN은 전세계적으로 인증 받은
          <br />
          Uthever® NMN로 만든 고순도 제품입니다.
        </span>
        <div className="flex gap-[14.3px]">
          {imgs.map((img, idx) => (
            <img key={idx} src={img.path} alt="letter" />
          ))}
        </div>
        <div className="flex flex-none gap-[14.3px]">
          {img2s.map((img, idx) => (
            <div key={idx} className="flex justify-center items-center">
              <img src={img.path} alt="letter" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src="/img/main-illust-01.png" alt="" />
      </div>
    </div>
  );
}
