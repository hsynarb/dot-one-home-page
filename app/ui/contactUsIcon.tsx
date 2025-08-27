import Image from "next/image";

interface ContactUsIconProps {
  src: string;
  alt?: string;
}
export default function ContactUsIcon({
  src,
  alt = "contact us icon",
}: ContactUsIconProps) {
  return (
    <div className="rounded-full bg-[#f5f5f5] p-5">
      <Image src={src} width={18} height={18} alt={alt} />
    </div>
  );
}
