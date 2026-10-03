import Link from "next/link"
export default function PrimaryButton({children, href, variant="primary"}: any){
  const style: any = variant === "primary" 
  ? {background:"#143856", color:"white", padding:"14px 28px", borderRadius:"999px", fontWeight:"800", display:"inline-flex", alignItems:"center"}
  : {background:"white", color:"#143856", padding:"14px 28px", borderRadius:"999px", fontWeight:"800", display:"inline-flex", alignItems:"center", border:"2px solid #143856"}
  
  const cls = "primary-hover"
  if(href) return <Link href={href} style={style} className={cls}>{children}</Link>
  return <button style={style} className={cls}>{children}</button>
}