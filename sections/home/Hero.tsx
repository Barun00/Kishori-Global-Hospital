import Image from "next/image"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import Reveal from "@/components/common/Reveal"

export default function Hero(){
  return(
    <section style={{maxWidth:"1280px", margin:"0 auto", padding:"40px 24px"}}>
      <style>{`@media(max-width:1024px){.hero-grid{grid-template-columns:1fr !important;}}`}</style>
      
      <div className="hero-grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"48px", alignItems:"center"}}>
        
        {/* LEFT CONTENT WITH REVEAL */}
        <Reveal>
          <div>
            <p style={{color:"#5ac8d0", fontWeight:"800", letterSpacing:"0.3em", fontSize:"12px", margin:"0"}}>KISHORI GLOBAL HOSPITAL</p>
            
            <h1 style={{fontSize:"68px", fontWeight:"900", lineHeight:"0.9", color:"#143856", margin:"16px 0"}}>
              Caring <br/> <span style={{color:"#5ac8d0"}}>for You</span>
            </h1>
            
            <p style={{color:"#475569", marginTop:"16px", fontSize:"17px"}}>At- Sayan, P.O.- Deogaon, Dist.- Bargarh, Odisha - 768038</p>
            
            <div style={{display:"flex", gap:"16px", marginTop:"28px", flexWrap:"wrap"}}>
              <PrimaryButton href="tel:7077772231">Call: 7077-772-231</PrimaryButton>
              <PrimaryButton href="/contact" variant="outline">Book Appointment →</PrimaryButton>
            </div>
            
            <p style={{fontWeight:"700", color:"#143856", marginTop:"18px", fontSize:"14px"}}>www.kishoriglobalhospitals.com</p>
          </div>
        </Reveal>

        {/* RIGHT IMAGE WITH REVEAL DELAY */}
        <Reveal delay={200}>
          <div style={{position:"relative"}}>
            <div style={{position:"relative", width:"100%", height:"520px", borderRadius:"32px", overflow:"hidden", boxShadow:"0 20px 40px rgba(0,0,0,0.15)", background:"white"}}>
              <Image 
                src="/hero.jpg" 
                alt="Kishori Global Hospital" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{objectFit:"cover", objectPosition:"top"}} 
                priority 
              />
            </div>
            <div style={{position:"absolute", bottom:"-20px", left:"16px", right:"16px", background:"#143856", color:"white", borderRadius:"16px", padding:"16px 24px", display:"flex", justifyContent:"space-between", fontWeight:"700", fontSize:"14px", boxShadow:"0 10px 25px rgba(0,0,0,0.2)"}}>
              <span>📍 Sayan, Bargarh</span><span>📞 7077-772-231</span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}