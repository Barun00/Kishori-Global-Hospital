import Link from "next/link";
export default function NavLink({href, children}: {href:string, children:React.ReactNode}){
  return <Link href={href} className="text-[#143856] font-semibold text-[15px] hover:text-[#2E8AA8] transition-colors">{children}</Link>
}