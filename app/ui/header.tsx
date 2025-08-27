import Image from "next/image";
import Styles from "./header.module.css";
import classNames from "classnames";

export default function Header() {
  const headerConstants = {
    aboutUs: "درباره ما",
    weblog: "وبلاگ",
    companies: "معرفی شرکت ها",
    contactUs: "تماس با ما",
    jobs: "موقعیت های شغلی",
  };
  return (
    <div className="relative">
      <Image
        src={"/one-tower.png"}
        width={1440}
        height={650}
        alt="one-tower-picture"
        className="object-cover w-full"
      />
      <div
        className={classNames(
          "flex justify-between items-center px-27 py-5 rounded-3xl absolute top-0 right-27 left-27 backdrop-blur-xs bg-white",
          Styles["header-nav"]
        )}
      >
        <Image
          src={"/dot-one-logo-black.svg"}
          width={64}
          height={48}
          alt="dot-one-logo"
        />
        <div className="flex gap-13">
          <span>{headerConstants.aboutUs}</span>
          <span>{headerConstants.weblog}</span>
          <span>{headerConstants.companies}</span>
          <span>{headerConstants.contactUs}</span>
          <span>{headerConstants.jobs}</span>
        </div>
        <button className="flex gap-1 items-center px-10 py-3 bg-[#FFFFFF] rounded-xl">
          <span>{"فا"}</span>
          <Image
            src={"/arrow-down.svg"}
            width={20}
            height={20}
            alt="arrow-down"
          />
        </button>
      </div>
    </div>
  );
}
