"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
interface DropDownProps {
  name?: string;
  placeholder?: string;
  iconSrc?: string;
  label?: string;
}
export default function DropDown({
  name,
  placeholder,
  iconSrc,
  label,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <label htmlFor={name}>{label}:</label>

      <div
        className={
          "relative flex gap-4 p-5 bg-white cursor-pointer rounded-xl text-sm border border-transparent hover:border-black"
        }
        onClick={() => setIsOpen((pre) => !pre)}
      >
        {iconSrc && (
          <Image
            src={iconSrc}
            width={18}
            height={18}
            alt="icon"
            className="hover:fill-black hover:text-black"
          />
        )}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="pr-4 border-r border-[#EBEBEB] flex-grow-1 cursor-pointer focus:outline-none"
        />
        <Image
          src={"/arrow-down.svg"}
          width={20}
          height={20}
          alt="arrow down icon"
        />
        <div
          className={classNames(
            "absolute top-[100%] right-0 flex flex-col p-5 mt-2 rounded-xl bg-white w-full",
            { hidden: !isOpen }
          )}
        >
          <div className="pr-12 py-4 hover:bg-[#f5f5f5] hover:rounded-xl">
            {"موقعیت شغلی"}
          </div>
          <div className="pr-12 py-4 hover:bg-[#f5f5f5] hover:rounded-xl">
            {"ایده و طرح"}
          </div>
          <div className="pr-12 py-4 hover:bg-[#f5f5f5] hover:rounded-xl">
            {"انتقادات و پیشنهادات"}
          </div>
        </div>
      </div>
    </div>
  );
}
