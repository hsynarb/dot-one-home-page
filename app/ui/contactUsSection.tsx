import Image from "next/image";
import ContactForm from "./contactForm";
import Title from "./title";
import ContactUsIcon from "./contactUsIcon";
import { useContext, useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";
import { AnimationDurationContext } from "@/app/hooks/animationContext";

export default function ContactUsSection() {
  const duration = useContext(AnimationDurationContext);
  const titleDivRef = useRef(null);
  const formRef = useRef(null);
  const isTitleDivVisible = useIsVisible(titleDivRef);
  const isFormVisible = useIsVisible(formRef);
  return (
    <section className="mx-[108px] mt-[118px]">
      <div
        ref={titleDivRef}
        className={classNames(
          `transform transition-all ease-in-out duration-${duration}`,
          {
            "opacity-0 translate-x-[100%]": !isTitleDivVisible,
            "opacity-100 translate-x-0": isTitleDivVisible,
          }
        )}
      >
        <Title title="تماس با ما" />
        <p className="text-2.5xl mt-5">{"با ما در تماس باشید. "}</p>
        <p className="text-sm mt-8">{"گفت‌وگو، آغاز هر پیوند است."}</p>
        <p className="text-sm">
          {
            "اگر پرسشی دارید، مایلید بیشتر درباره ما بدانید یا ایده‌ای در ذهن دارید، خوشحال می‌شویم از شما بشنویم."
          }
        </p>
      </div>
      <div ref={formRef} className="flex justify-between mt-12">
        <ContactForm
          className={classNames(
            "flex-1",
            `transform transition-all ease-in-out duration-${duration}`,
            {
              "opacity-0 translate-x-[100%]": !isFormVisible,
              "opacity-100 translate-x-0": isFormVisible,
            }
          )}
        />
        <div
          className={classNames(
            "flex-1 flex flex-col gap-40 justify-between items-center",
            `transform transition-all ease-in-out duration-${duration}`,

            {
              "opacity-0 -translate-x-[100%]": !isFormVisible,
              "opacity-100 translate-x-0": isFormVisible,
            }
          )}
        >
          <Image
            src={"/address.png"}
            width={482}
            height={427}
            alt="company address"
          />
          <div className="flex gap-8 justify-center items-center">
            <ContactUsIcon src={"/contact-us-icon.svg"} />
            <ContactUsIcon src={"/telegram.svg"} />
            <ContactUsIcon src={"/call-ringing.svg"} />
            <ContactUsIcon src={"/sms.svg"} />
            <ContactUsIcon src={"/x.svg"} />
            <ContactUsIcon src={"/linkdin.svg"} />
          </div>
        </div>
      </div>
      {/* <div
        className={classNames(Styles["lattice-pattern"], "h-[200px] w-full")}
      /> */}
    </section>
  );
}
