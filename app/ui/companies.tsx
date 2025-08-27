import { useRef } from "react";
import CompanyButton from "./companyButton";
import Title from "./title";
import useIsVisible from "@/app/hooks/useIsVisible";
import classNames from "classnames";
export default function Companies() {
  const titleRef = useRef(null);
  const asortmentRef = useRef(null);
  const isTitleVisible = useIsVisible(titleRef);
  return (
    <section className="mt-[80px] mx-[108px]">
      <Title
        ref={titleRef}
        title={"دسته بندی شرکت ها"}
        className={classNames(
          "mb-20",
          "transform transition-all ease-in duration-900",
          {
            "opacity-0 translate-x-[100%]": !isTitleVisible,
            "opacity-100 translate-x-0": isTitleVisible,
          }
        )}
      />
      <div
        ref={asortmentRef}
        className={classNames(
          "grid grid-cols-5 gap-12",
          "transform transition-all ease-in duration-900",
          {
            "opacity-0 translate-y-50": !isTitleVisible,
            "opacity-100 translate-y-0": isTitleVisible,
          }
        )}
      >
        <CompanyButton text="ترابری" />
        <CompanyButton text="مالی و اعتباری" />
        <CompanyButton text="رسانه" />
        <CompanyButton text="ترابری" />
        <CompanyButton text="ترابری" />
        <CompanyButton text="ترابری" />
        <CompanyButton text="مالی و اعتباری" />
        <CompanyButton text="رسانه" />
        <CompanyButton text="ترابری" />
        <CompanyButton text="ترابری" />
      </div>
    </section>
  );
}
