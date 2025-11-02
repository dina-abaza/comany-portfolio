import Link from "next/link";

export default function PrimaryButton({ href, text }) {
  return (
    <Link href={href}>
      <button className="max-w-[286] md:max-w-[386px] min-h-[45px]   whitespace-nowrap rounded-xl py-[10px] px-[16px]
        bg-gradient-to-r from-[#88E600] to-[#10A700] text-black font-bold text-[16px] md:text-[18px]
        transition-all duration-300 hover:opacity-90">
      {text}
      </button>
    </Link>
  );
}
