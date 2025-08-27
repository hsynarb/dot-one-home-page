import Image from "next/image";
import Title from "./title";
import CompanyItem from "./companyItem";

export default function CompanyRowSection() {
  return (
    <div dir="rtl" className="">
      <Title title={"معرفی شرکت ها"} />
      <div className="flex justify-between">
        <span className="text-2.5xl">{"ترابری"}</span>
        <Image
          src={"/peykan-left.svg"}
          width={30}
          height={25}
          alt="go-to icon"
        />
      </div>
      <div className="flex gap-8 mt-12">
        <CompanyItem className="flex-1" />
        <CompanyItem className="flex-1" />
        <CompanyItem className="flex-1" />
      </div>
    </div>
  );
}
