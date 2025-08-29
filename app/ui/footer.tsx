import Image from "next/image";
import FooterLinks from "./footerLinks";
import { useContext, useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";
import { AnimationDurationContext } from "@/app/hooks/animationContext";

export default function Footer() {
  const duration = useContext(AnimationDurationContext);
  const footerRef = useRef(null);
  const isFooterVisible = useIsVisible(footerRef);
  const group1Links = [
    "دسترسی سریع",
    "تماس با ما",
    "درباره ما",
    "شرکت ها",
    "استخدام",
    "اخبار",
  ];
  const group2Links = [
    "لینک ها",
    "www.link.com",
    "www.link.com",
    "www.link.com",
    "www.link.com",
    "www.link.com",
  ];
  return (
    <div
      ref={footerRef}
      className={classNames(
        "flex flex-col justify-between items-center mx-[108px] pt-[184px] pb-4",
        `transform transition-all ease-in-out duration-${duration}`,
        {
          "opacity-0 translate-y-[100%]": !isFooterVisible,
          "opacity-100 translate-y-0": isFooterVisible,
        }
      )}
    >
      <Image
        src={"/dot-one-logo-black.svg"}
        width={196}
        height={147}
        alt="dot one logo"
        className="mb-22"
      />
      <div className="flex justify-between w-full px-[180px] mb-28">
        <div className="flex flex-col items-center gap-8">
          <Image
            src={"call-ringing.svg"}
            width={40}
            height={40}
            alt="call icon"
          />
          <span>{"۰۲۱-۴۲۱۰۱۰۰۰"}</span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Image
            src={"location.svg"}
            width={40}
            height={40}
            alt="location icon"
          />
          <span>{"تهران، جهان کودک، برج دات وان"}</span>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Image src={"sms.svg"} width={40} height={40} alt="sms icon" />
          <span>{"00info1@one-holding.ir"}</span>
        </div>
      </div>
      <div className="flex justify-between w-full px-[104px] mb-28">
        <FooterLinks links={group1Links} />
        <FooterLinks links={group2Links} />
        <FooterLinks links={group2Links} />
        <FooterLinks links={group2Links} />
      </div>
      <div className="flex items-center gap-9 w-full">
        <div className="h-[1px] flex-grow-1 bg-black" />
        <p>
          {"هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @"}
        </p>
        <div className="h-[1px] flex-grow-1 bg-black" />
      </div>
    </div>
  );
}
