import classNames from "classnames";
import Image from "next/image";

interface CompanyButtonProps {
  text: string;
}
export default function CompanyButton({ text }: CompanyButtonProps) {
  return (
    <button
      className={classNames(
        "relative flex items-center aspect-[226/60] rounded-2xl bg-[#141414] text-white text-2xl whitespace-nowrap",
        "transform transition-all ease-in-out duration-900",
        " hover:pr-12 hover:pl-5 hover:bg-[#f5f5f5]",

        "group"
      )}
    >
      <span
        className={classNames(
          "absolute right-1/2 text-white transform transition-all ease-in-out duration-900 translate-x-1/2 group-hover:translate-x-[100%] group-hover:opacity-0"
        )}
      >
        {text}
      </span>
      <span
        className={classNames(
          "absolute text-black opacity-0 transform transition-all ease-in-out duration-900 right-[50%] group-hover:right-12 group-hover:block group-hover:opacity-100"
        )}
      >
        {text}
      </span>
      <div className="absolute opacity-0 left-1/2 -translate-x-1/2 bg-black rounded-xl p-5 transform transition-all ease-in-out duration-900 group-hover:block group-hover:left-16 group-hover:opacity-100">
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
