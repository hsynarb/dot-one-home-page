import { useContext, useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";

import Styles from "./oneIntroduction.module.css";
import { AnimationDurationContext } from "@/app/hooks/animationContext";

export default function OneIntroduction() {
  const duration = useContext(AnimationDurationContext);

  const oneRef = useRef<HTMLDivElement>(null);
  const introRef = useRef(null);
  const sloganRef = useRef(null);

  const isOneVisible = useIsVisible(oneRef);

  const oneIntroductionPara =
    "وان، یک گروه اقتصادی ارزش آفرین است (آوان) به واسطه سرمایه گذاری هوشمندانه و ساماندهی خردمندانه،  زیرساخت های لازم برای آبادانی و سودرسانی همگانی را فراهم می آورد، تا کسانی که پویا و کوشا هستند، مجال زایش و رویش بیابند.گروه ارزش‌آفرین وان یک سازمان دوراندیش است که با شعار»آسایش برای همگان«  نقشی محوری در زمینه‌های کلیدی مانند  حمل و نقل، پولی-مالی، سرمایه‌گذاری، کارآفرینی، توسعه تجارت بین‌المللی، رسانه، فناوری و ارتباطات  ایفا خواهد نمود.";

  return (
    <>
      <div className="flex justify-between gap-48 mx-[108px] my-[56px]">
        <div
          ref={oneRef}
          className={classNames(
            `flex-2 flex flex-col transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 translate-x-[100%]": !isOneVisible,
              "opacity-100 translate-x-0": isOneVisible,
            }
          )}
        >
          <span className="text-3.5xl">{"گروه"}</span>
          <span className="text-3.5xl whitespace-nowrap">
            {"ارزش آفرین وان"}
          </span>
        </div>
        <p
          ref={introRef}
          className={classNames(
            `flex-6 text-sm text-justify transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 -translate-x-[100%]": !isOneVisible,
              "opacity-100 translate-x-0": isOneVisible,
            }
          )}
        >
          {oneIntroductionPara}
        </p>
      </div>
      <div
        ref={sloganRef}
        className={classNames(
          "relative",
          "pt-[38px] px-[23px] mx-[108px] bg-[#F5F5F5] rounded-4xl",
          `transform transition-all ease-in-out duration-${duration}`,
          {
            "opacity-0 translate-y-40": !isOneVisible,
            "opacity-100 translate-y-0": isOneVisible,
          }
        )}
      >
        <div className={classNames(Styles.hex, Styles.left)} />
        <div className={classNames(Styles.hex, Styles["mid-left"])} />
        <div className={classNames(Styles.hex, Styles["mid-right"])} />
        <div className={classNames(Styles.hex, Styles.right)} />

        <div className="absolute top-[100%] left-0 w-100 h-23 bg-white z-4 w-full" />
        <div className="flex flex-col items-center pb-[52px] px-[192px]">
          <p className="whitespace-nowrap">
            {
              "ارزندگی، قطب نمای ما در ‌وان است و هر فعالیتی به سمت ارزش‌آفرینی و افزودن ارزشی به جهان امروز ؛ چرا که باور داریم:"
            }
          </p>
          <p>{"«فردا، فرزند امروز است.»"}</p>
        </div>
      </div>
    </>
  );
}
