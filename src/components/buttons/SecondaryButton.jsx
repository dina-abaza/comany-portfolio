import Link from "next/link";

export default function SecondaryButton({ href }) {
  return (
    <Link href={href}>
      <button className="w-[120px] h-[40px] rounded-xl
        bg-black text-white font-bold border border-white/50
        transition-all duration-300 hover:bg-white/10">
        see our work
      </button>
    </Link>
  );
}
