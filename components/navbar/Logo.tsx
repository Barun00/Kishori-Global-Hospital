import Link from "next/link"
export default function Logo(){
  return(
    <Link href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#5ac8d0] flex items-center justify-center text-white font-black text-xl">K</div>
      <div className="leading-none">
        <p className="font-black text-[#143856] text-[15px] tracking-wide !m-0 !p-0">KISHORI GLOBAL</p>
        <p className="text-[#5ac8d0] tracking-[0.35em] text-[10px] font-bold !m-0 !p-0">HOSPITAL</p>
      </div>
    </Link>
  )
}