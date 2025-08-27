import Image from "next/image";
import Input from "./input";
import DropDown from "./dropDown";
import Captcha from "./captcha";
import classNames from "classnames";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col gap-10 rounded-[30px] bg-[#F5F5F5] p-20"
      )}
    >
      <div className="grid grid-cols-2 gap-10">
        <Input
          iconSrc={"/profile.svg"}
          name="name"
          placeholder="نام"
          label={"نام"}
        />
        <DropDown
          iconSrc={"/category.svg"}
          name="name"
          placeholder={"دسته بندی را انتخاب کنید"}
          label={"دسته بندی"}
        />
        <Input
          iconSrc={"/call.svg"}
          name="name"
          placeholder="شماره تماس"
          label={"شماره تماس"}
        />
        <Input
          iconSrc={"/sms.svg"}
          name="name"
          placeholder="ایمیل"
          label={"ایمیل"}
        />
      </div>
      <div className="flex-grow-1">
        <label htmlFor="application">{"درخواست"}:</label>
        <div className="flex gap-4 bg-white h-full rounded-xl px-7 py-5 border border-transparent hover:border-black">
          <div className="flex flex-col justify-start mt-1">
            <Image
              src={"sms-tracking.svg"}
              width={18}
              height={20}
              alt="icon"
              className="border-l border-[#EBEBEB] pl-4 flex-shrink-0 w-full"
            />
          </div>
          <textarea
            name="application"
            id=""
            placeholder={"درخواست خود را بنویسید..."}
            className="flex-grow-1 focus:outline-none"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <Captcha className="flex-1" />
        <div className="flex justify-end items-center flex-1">
          <button className="text-sm text-white bg-black rounded-xl px-22 py-5 flex-grow-0">
            {"ارسال"}
          </button>
        </div>
      </div>
    </div>
  );
}
