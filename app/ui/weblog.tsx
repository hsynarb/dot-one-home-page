import Image from "next/image";
import WeblogItemMedium from "./weblogItemMedium";
import WeblogItemSmall from "./weblogItemSmall";
import Title from "./title";
import { useContext, useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";
import { AnimationDurationContext } from "@/app/hooks/animationContext";

export default function Weblog() {
  const duration = useContext(AnimationDurationContext);

  const titleRef = useRef(null);
  const smallSectionRef = useRef(null);
  const isTitleVisible = useIsVisible(titleRef);
  const isSmallSectionVisible = useIsVisible(smallSectionRef);
  return (
    <section className="mx-[108px] mt-[100px]">
      <Title
        ref={titleRef}
        title="وبلاگ"
        className={classNames(
          "mb-20",
          `transform transition-all ease-in-out duration-${duration}`,
          {
            "opacity-0 translate-x-[100%]": !isTitleVisible,
            "opacity-100 translate-x-0": isTitleVisible,
          }
        )}
      />
      <div className="flex gap-12">
        <WeblogItemMedium
          className={classNames(
            `transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 translate-x-[100%]": !isTitleVisible,
              "opacity-100 translate-x-0": isTitleVisible,
            }
          )}
        />
        <WeblogItemMedium
          className={classNames(
            `transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 -translate-x-[100%]": !isTitleVisible,
              "opacity-100 translate-x-0": isTitleVisible,
            }
          )}
        />
      </div>
      <div ref={smallSectionRef} className="flex gap-12 mt-12">
        <WeblogItemSmall
          className={classNames(
            "flex-1",
            "transform transition-all ease-in-out duration-900",
            {
              "opacity-0 translate-x-[100%]": !isSmallSectionVisible,
              "opacity-100 translate-x-0": isSmallSectionVisible,
            }
          )}
        />
        <WeblogItemSmall
          className={classNames(
            "flex-1",
            `transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 translate-y-[100%]": !isSmallSectionVisible,
              "opacity-100 translate-y-0": isSmallSectionVisible,
            }
          )}
        />
        <div
          className={classNames(
            "flex flex-col gap-16 bg-[#F5F5F5] rounded-4xl p-12 flex-1 ",
            "transform transition-all ease-in-out duration-900",
            {
              "opacity-0 -translate-x-[100%]": !isSmallSectionVisible,
              "opacity-100 translate-x-0": isSmallSectionVisible,
            }
          )}
        >
          <div className="flex justify-between items-center mt-10 flex-1">
            <div className="flex flex-col text-lg font-semibold">
              <p>{"مشاهده اخبار و"}</p>
              <p>{"مقالات بیشتر"}</p>
            </div>
            <div className="rounded-xl bg-white p-[17px]">
              <Image
                src={"peykan-left.svg"}
                width={25}
                height={30}
                alt="go-to icon"
              />
            </div>
          </div>
          <div className="relative flex-1 aspect-[352/80]">
            <div className="absolute left-[0%] top-0 w-[28%] aspect-[98/80]">
              <Image
                src="/airport.png"
                alt="airport"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-[18%] top-0 w-[28%] aspect-[98/80]">
              <Image
                src="/netflix-s.png"
                alt="netflix"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-[36%] top-0 w-[28%] aspect-[98/80]">
              <Image
                src="/car-inside.png"
                alt="car inside"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-[54%] top-0 w-[28%] aspect-[98/80]">
              <Image
                src="/city-pic-s.png"
                alt="city"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="absolute left-[72%] top-0 w-[28%] aspect-[98/80]">
              <Image
                src="/laptop.png"
                alt="laptop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
