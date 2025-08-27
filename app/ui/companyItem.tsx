import classNames from "classnames";
import Image from "next/image";

interface CompanyItemProps {
  className?: string;
}

export default function CompanyItem({ className }: CompanyItemProps) {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col gap-12 items-center bg-white rounded-4xl p-12"
      )}
    >
      <Image
        src={"/avan-safar-logo.png"}
        width={130}
        height={130}
        alt="avan safar logo"
        className="flex-1"
      />
      <p className="text-sm text-justify flex-1">
        {
          "دات‌وان ریل، هواپیمایی ریلی ایران، سفری را فراتر از تصور رقم می‌زند؛ سفری که سرعت، دقت و آسایش پروازهای هوایی را به دنیای ریلی می‌آورد."
        }
      </p>
    </div>
  );
}
