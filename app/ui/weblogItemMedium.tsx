import Image from "next/image";
import CardTag from "./cardTag";
import classNames from "classnames";

interface WeblogItemMediumProps {
  className?: string;
  imgSrc: string;
}

export default function WeblogItemMedium({
  className,
  imgSrc,
}: WeblogItemMediumProps) {
  return (
    <div
      className={classNames(
        className,
        "group p-7 rounded-4xl bg-[#F5F5F5] hover:bg-[#141414]",
        "transition-all ease-in-out duration-1500"
      )}
    >
      <div className="flex">
        <div className="flex flex-col justify-between">
          <div className="flex items-center gap-5">
            <CardTag text="هواپیما" />
            <CardTag text="هواپیما" />
            <CardTag text="هواپیما" />
            <CardTag text="هواپیما" />
          </div>
          <div
            className={classNames(
              "pl-2",
              "text-black group-hover:text-white",
              "transition-all ease-in-out duration-1500"
            )}
          >
            <p className="font-semibold text-lg mt-12 mb-4">
              {"لورم ایپسوم متن ساختگی!"}
            </p>
            <p className="text-sm text-justify">
              {
                "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است..."
              }
            </p>
          </div>
          <div className="relative flex gap-2 mt-16 group-hover:text-white transition-all ease-in-out duration-1500">
            <div
              className={classNames(
                "aspect-[14/14] w-[14px] bg-[url('/calendar-edit.svg')]",
                "group-hover:bg-[url('/calendar-edit-white.svg')]",
                "transition-all ease-in-out duration-900"
              )}
            />
            <span className="text-[10px]">{"۲۴ فروردین ۱۴۰۴"}</span>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-[242px] h-[232px]">
          <Image
            src={imgSrc}
            alt="city picture"
            fill
            className="object-cover rounded-lg"
          />
          <div
            className={classNames(
              "absolute inset-0 bg-gradient-to-l from-[#F5F5F5]/100 to-transparent to-80% opacity-100 group-hover:opacity-0",
              "transition-all ease-in-out duration-1500"
            )}
          />
          <div
            className={classNames(
              "absolute inset-0 bg-gradient-to-l from-[#141414]/100 to-transparent to-80% opacity-0 group-hover:opacity-100",
              "transition-all ease-in-out duration-1500"
            )}
          />
          <div className="absolute z-1 left-[14px] bottom-[14px] p-5 rounded-xl bg-white">
            <Image
              src={"peykan-left.svg"}
              width={19}
              height={19}
              alt="go to icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
