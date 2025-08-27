import classNames from "classnames";
import Image from "next/image";

interface CaptchaProps {
  className?: string;
}
export default function Captcha({ className }: CaptchaProps) {
  return (
    <div
      className={classNames(
        className,
        "flex justify-between items-center px-6 py-4 rounded-[2px] bg-[#fafafa]"
      )}
    >
      <label htmlFor="robot" className="flex gap-6">
        <input type="checkbox" id="robot" className="peer opacity-0 w-0 h-0" />
        <div className="border-[2px] bg-white border-[#c1c1c1] rounded-[2px] w-12 h-12 peer-checked:bg-blue-600 peer-checked:before:content-['✓'] peer-checked:text-white"></div>
        <span className="">{"من ربات نیستم"}</span>
      </label>
      <Image src={"/captcha.png"} width={56} height={59} alt="captcha logo" />
    </div>
  );
}
