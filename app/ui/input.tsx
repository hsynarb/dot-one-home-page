import Image from "next/image";

interface InputProps {
  name?: string;
  placeholder?: string;
  iconSrc?: string;
  label?: string;
}
export default function Input({
  name,
  placeholder,
  iconSrc,
  label,
}: InputProps) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>

      <div className="flex gap-4 p-5 bg-white rounded-xl text-sm border border-transparent hover:border-black">
        {iconSrc && (
          <Image src={iconSrc} width={18} height={18} alt="icon" className="" />
        )}
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="pr-4 border-r border-[#EBEBEB]"
        />
      </div>
    </div>
  );
}
