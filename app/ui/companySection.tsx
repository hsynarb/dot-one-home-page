import Image from "next/image";
import CompanyRowSection from "./companyRowSection";
import classNames from "classnames";
import { useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";

export default function CompanySection() {
  const imageRef = useRef(null);
  const isImageVisible = useIsVisible(imageRef);
  return (
    <section className="flex gap-40 justify-between mx-32 mt-40">
      <Image
        ref={imageRef}
        src={"/one-tower.svg"}
        width={272}
        height={993}
        alt="dot one tower"
        className={classNames(
          "flex-1",
          "transform transition-all ease-in duration-900",
          {
            "opacity-0 translate-x-[100%]": !isImageVisible,
            "opacity-100 translate-x-0": isImageVisible,
          }
        )}
      />
      <div
        dir="ltr"
        className={classNames(
          "rounded-[40px] bg-[#F5F5F5] pl-20 pr-5 flex-3",
          "transform transition-all ease-in duration-900",
          {
            "opacity-0 -translate-x-[100%]": !isImageVisible,
            "opacity-100 translate-x-0": isImageVisible,
          }
        )}
      >
        <div className="flex flex-col gap-18  overflow-y-scroll custom-scrollbar max-h-[993] pr-10 pt-20">
          <CompanyRowSection />
          <CompanyRowSection />
          <CompanyRowSection />
          <CompanyRowSection />
        </div>
      </div>
    </section>
  );
}
