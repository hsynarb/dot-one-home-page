import Image from "next/image";
import ContactForm from "./contactForm";
import Title from "./title";
import ContactUsIcon from "./contactUsIcon";
import { useRef } from "react";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";

export default function ContactUsSection() {
  const titleDivRef = useRef(null);
  const isTitleDivVisible = useIsVisible(titleDivRef);
  return (
    <section className="mx-[108px] mt-[118px]">
      <div
        ref={titleDivRef}
        className={classNames("transform transition-all ease-in duration-900", {
          "opacity-0 translate-x-[100%]": !isTitleDivVisible,
          "opacity-100 translate-x-0": isTitleDivVisible,
        })}
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
      <div className="flex justify-between mt-12">
        <ContactForm
          className={classNames(
            "transform transition-all ease-in duration-900",
            {
              "opacity-0 translate-x-[100%]": !isTitleDivVisible,
              "opacity-100 translate-x-0": isTitleDivVisible,
            }
          )}
        />
        <div
          className={classNames(
            "flex flex-col gap-40 justify-between items-center",
            "transform transition-all ease-in duartion-900",

            {
              "opacity-0 -translate-x-[100%]": !isTitleDivVisible,
              "opacity-100 translate-x-0": isTitleDivVisible,
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
    </section>
  );
}
