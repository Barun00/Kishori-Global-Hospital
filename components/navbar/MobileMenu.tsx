"use client"
import {useState} from "react"
import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"
const links = [
  {href:"/", label:"Home"},
  {href:"/about", label:"About"},
  {href:"/programs", label:"Programs"},
  {href:"/gallery", label:"Gallery"},
  {href:"/contact", label:"Contact"},
]
export default function MobileMenu(){
  const [open,setOpen]=useState(false)
  return(
    <div className="mobile-menu relative">
      <button onClick={()=>setOpen(!open)} className="w-10 h-10 rounded-full bg-[#143856] text-white text-xl flex items-center justify-center">{open ? "✕" : "☰"}</button>
      {open && (
        <div className="absolute top-[50px] right-0 w-[280px] bg-white rounded-2xl shadow-2xl border p-6 flex flex-col gap-4 z-50">
          {links.map(l=>(
            <Link key={l.href} href={l.href} onClick={()=>setOpen(false)} className="font-semibold text-[#143856] border-b border-gray-100 pb-3 last:border-0">{l.label}</Link>
          ))}
          <PrimaryButton href="/contact">Book Appointment</PrimaryButton>
        </div>
      )}
    </div>
  )
}