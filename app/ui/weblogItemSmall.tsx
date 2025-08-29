import Image from "next/image";
import CardTag from "./cardTag";
import classNames from "classnames";
import { RefObject } from "react";

interface WeblogItemSmall {
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  imgSrc: string;
}
export default function WeblogItemSmall({
  className,
  ref,
  imgSrc,
}: WeblogItemSmall) {
  return (
    <div
      ref={ref}
      className={classNames(
        className,
        "p-7 flex flex-col bg-[#F5F5F5] rounded-4xl"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-5">
          <CardTag text="هواپیما" />
          <CardTag text="هواپیما" />
        </div>
        <div className="flex gap-2">
          <Image
            src={"/calendar-edit.svg"}
            width={14}
            height={14}
            alt="calendar icon"
          />
          <span className="text-[10px]">{"۲۴ فروردین ۱۴۰۴"}</span>
        </div>
      </div>
      <p className="font-semibold text-lg mt-8 z-1">
        {"لورم ایپسوم متن ساختگی!"}
      </p>
      <div className="relative flex-shrink-0 flex-grow-1 aspect-[364/171]  mt-[-18px]">
        <Image
          src={imgSrc}
          fill
          alt="netflix on a screen"
          className="object-cover"
        />
        <div className="absolute z-1 left-[14px] bottom-[14px] p-5 rounded-xl bg-white">
          <Image
            src={"peykan-left.svg"}
            width={19}
            height={19}
            alt="go to icon"
          />
        </div>
      </div>
    </div>
  );
}
