import Image from "next/image";
import Styles from "./header.module.css";
import classNames from "classnames";
import LanguageDropDown from "./languageDropdown";

export default function Header() {
  const headerConstants = {
    aboutUs: "درباره ما",
    weblog: "وبلاگ",
    companies: "معرفی شرکت ها",
    contactUs: "تماس با ما",
    jobs: "موقعیت های شغلی",
  };
  const languageOptions = [
    { abr: "فا", full: "فارسی" },
    { abr: "En", full: "English" },
    { abr: "Ar", full: "Arabic" },
    { abr: "Ru", full: "Russian" },
    { abr: "Tr", full: "Turkey" },
  ];
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
          "flex justify-between items-center px-27 py-5 rounded-3xl absolute top-7 right-27 left-27 backdrop-blur-xs bg-white",
          Styles["header-nav"]
        )}
      >
        <Image
          src={"/dot-one-logo-black.svg"}
          width={64}
          height={48}
          alt="dot-one-logo"
          className=""
        />
        <div className="flex justify-center gap-13 flex-grow-1 ">
          <span>{headerConstants.aboutUs}</span>
          <span>{headerConstants.weblog}</span>
          <span>{headerConstants.companies}</span>
          <span>{headerConstants.contactUs}</span>
          <span>{headerConstants.jobs}</span>
        </div>
        <LanguageDropDown
          options={languageOptions}
          defaultValue="فا"
          className=""
        />
      </div>
    </div>
  );
}
