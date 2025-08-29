"use client";
import classNames from "classnames";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "greek"],
});

type LanguageOption = {
  abr: string;
  full: string;
};
interface LanguageDropDownProps {
  options: LanguageOption[];
  name?: string;
  defaultValue?: string;
  className?: string;
}
export default function LanguageDropDown({
  options,
  name,
  defaultValue,
  className,
}: LanguageDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={classNames(
        className,
        "relative py-2 px-10 bg-white cursor-pointer text-sm inline-flex",
        "group",
        "transition-all ease-in-out duration-900",
        {
          "rounded-tl-xl rounded-tr-xl rounded-br-0 rounded-bl-0 bg-white text-black":
            isOpen,
          "rounded-xl hover:bg-[#5D5D5D] hover:text-white": !isOpen,
        }
      )}
      onClick={() => setIsOpen((pre) => !pre)}
    >
      <div
        className={classNames(
          "flex items-center gap-7 py-2 border-b",
          "transition-all ease-in-out duration-900",
          {
            "border-[#E1E1E1]": isOpen,
            "border-transparent": !isOpen,
          }
        )}
      >
        <input
          name={name}
          defaultValue={defaultValue}
          readOnly
          className={classNames("hidden")}
        />
        <span className="font-semibold pt-2">{"فا"}</span>
        <div
          className={classNames(
            "aspect-[20/20] w-[20px] bg-[url('/arrow-down.svg')]",
            "transition-all ease-in-out duration-900",
            {
              "group-hover:bg-[url('/arrow-down-white.svg')]": !isOpen,
            }
          )}
        />
      </div>
      <div
        className={classNames(
          "absolute top-[100%] right-0 flex flex-col gap-5 p-5 rounded-bl-xl rounded-br-xl bg-white w-full",
          "group-hover:text-black",
          "transform transition-all ease-in-out duration-900",
          {
            "opacity-0 max-h-0": !isOpen,
            "opacity-100 max-h-[200px]": isOpen,
          }
        )}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={classNames("flex justify-between items-center", {
              [inter.className]: index !== 0,
            })}
          >
            <span className="">{option.abr}</span>
            <span className="text-xs">{option.full}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
