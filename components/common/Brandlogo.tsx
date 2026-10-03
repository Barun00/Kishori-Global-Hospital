import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-[#2E8AA8] rounded-lg flex items-center justify-center text-white font-extrabold text-xl">
        K
      </div>
      <div className="leading-none">
        <h1 className="font-extrabold text-[#0A2F4A] text-[15px]">KISHORI GLOBAL</h1>
        <p className="text-[#2E8AA8] tracking-[0.3em] text-[11px] font-bold">HOSPITAL</p>
      </div>
    </Link>
  );
}