import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";
import { AnimationDurationContext } from "@/app/hooks/animationContext";

interface CompanyButtonProps {
  text: string;
}
export default function CompanyButton({ text }: CompanyButtonProps) {
  const duration = useContext(AnimationDurationContext);
  return (
    <button
      className={classNames(
        "relative flex items-center aspect-[226/60] rounded-2xl bg-[#141414] text-white text-2xl whitespace-nowrap",
        "transform transition-all ease-in-out duration-900",
        "hover:pr-12 hover:pl-5 hover:bg-[#f5f5f5]",

        "group"
      )}
    >
      <span
        className={classNames(
          "absolute right-1/2 text-white translate-x-1/2",
          "group-hover:translate-x-[100%] group-hover:opacity-0",
          `transform transition-all ease-in-out duration-${duration}`
        )}
      >
        {text}
      </span>
      <span
        className={classNames(
          "absolute text-black opacity-0 right-1/2",
          "group-hover:right-12 group-hover:block group-hover:opacity-100",
          `transform transition-all ease-in-out duration-${duration}`
        )}
      >
        {text}
      </span>
      <div
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 bg-black opacity-0 rounded-xl p-5",
          "group-hover:block group-hover:left-16 group-hover:opacity-100",
          `transform transition-all ease-in-out duration-${duration}`
        )}
      >
        <Image
          src={"/peykan-left-white.svg"}
          width={19}
          height={16}
          alt="arrow left icon"
        />
      </div>
    </button>
  );
}
