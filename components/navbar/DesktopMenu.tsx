import Link from "next/link"
import PrimaryButton from "../buttons/PrimaryButton"

export default function DesktopMenu(){
  return(
    <div style={{display:"flex", alignItems:"center", gap:"32px"}}>
      <nav style={{display:"flex", gap:"24px", alignItems:"center"}}>
        <Link href="/" style={{color:"#143856", fontWeight:"600", textDecoration:"none"}}>Home</Link>
        <Link href="/about" style={{color:"#143856", fontWeight:"600", textDecoration:"none"}}>About</Link>
        <Link href="/programs" style={{color:"#143856", fontWeight:"600", textDecoration:"none"}}>Programs</Link>
        <Link href="/gallery" style={{color:"#143856", fontWeight:"600", textDecoration:"none"}}>Gallery</Link>
        <Link href="/contact" style={{color:"#143856", fontWeight:"600", textDecoration:"none"}}>Contact</Link>
      </nav>
      <PrimaryButton href="/contact">Book Appointment</PrimaryButton>
    </div>
  )
}