"use client";
import Page1 from "@/components/page/page1";
import Page2 from "@/components/page/page2";
import Page3 from "@/components/page/page3";
import Page4 from "@/components/page/page4";
import Page5 from "@/components/page/page5";
import Page6 from "@/components/page/page6";
import Page7 from "@/components/page/page7";

export default function Home() {
  return (
    <>
      <img src="/img/bk-down-arrow.png" alt="" className="fixed bottom-0 left-0 p-20" />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
    </>
  );
}
