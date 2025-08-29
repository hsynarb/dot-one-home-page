"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface DropDownProps {
  options: string[];
  name?: string;
  placeholder?: string;
  iconSrc?: string;
  label?: string;
  defaultValue?: string;
}
export default function DropDown({
  options,
  name,
  placeholder,
  iconSrc,
  label,
  defaultValue,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {label && <label htmlFor={name}>{label}:</label>}
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
          defaultValue={defaultValue}
          className={classNames(
            "pr-4 flex-grow-1 cursor-pointer focus:outline-none",
            iconSrc && "border-r border-[#EBEBEB]"
          )}
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
          {options?.map((option, index) => (
            <div
              key={index}
              className="pr-12 py-4 hover:bg-[#f5f5f5] hover:rounded-xl"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
