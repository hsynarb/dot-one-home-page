interface CarTagProps {
  text: string;
}
export default function CardTag({ text }: CarTagProps) {
  return (
    <div className="bg-white text-black text-[10px] rounded-[10px] px-8 py-[5px]">
      {text}
    </div>
  );
}
