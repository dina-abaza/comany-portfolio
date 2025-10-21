import Link from "next/link";

export default function PrimaryButton({ href }) {
  return (
    <Link href={href}>
      <button className="w-[220px] h-[40px]  rounded-xl 
        bg-gradient-to-r from-[#88E600] to-[#10A700] text-black font-bold
        transition-all duration-300 hover:opacity-90">
      start your project now
      </button>
    </Link>
  );
}
