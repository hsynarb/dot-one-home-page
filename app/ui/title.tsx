import classNames from "classnames";
import { forwardRef, RefObject } from "react";

interface TitleProps {
  title: string;
  mainTitle?: string;
  className?: string;
}
const Title = forwardRef<HTMLDivElement, TitleProps>(function Title(
  { title, mainTitle = "جمله کوتاه یا یک تایتل", className },
  ref
) {
  return (
    <div ref={ref} className={classNames(className, "")}>
      <div className="flex items-center gap-5">
        <div>
          <div className="flex text-xs gap-2">
            <span>GROUP</span>
            <span className="font-semibold">ONE</span>
          </div>
          <div className="flex items-center">
            <div className="bg-[#939393] w-[140px] h-[1px]" />
            <div className="bg-[#939393] w-[5px] h-[5px] rotate-45" />
          </div>
        </div>
        <span className="text-[#939393] mt-8">{title}</span>
      </div>
      <p className="text-2.5xl mt-5">{mainTitle}</p>
    </div>
  );
});
export default Title;
