import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#143856", color: "white", paddingTop: "60px" }}>
      {/* Top Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", paddingBottom:"40px" }}>
        
        {/* 1st Column - Brand */}
        <div>
          <h3 style={{ color: "white", fontWeight: "900", fontSize: "20px", letterSpacing: "0.05em", margin: "0" }}>
            KISHORI GLOBAL HOSPITAL
          </h3>
          <p style={{ color: "#5AC8D0", fontSize: "17px", fontWeight: "600", margin: "8px 0 20px" }}>
            Caring for You
          </p>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px", lineHeight: "1.7", margin: "0" }}>
            At- Sayan, P.O.- Deogaon, Dist.- Baragada, Odisha, India<br />
            PIN - 768038
          </p>
          <a href="https://www.kishoriglobalhospitals.com" style={{ color: "#5AC8D0", fontSize: "16px", fontWeight: "700", display: "inline-block", marginTop: "12px", textDecoration: "none" }}>
            www.kishoriglobalhospitals.com
          </a>
        </div>

        {/* 2nd Column - Contact */}
        <div>
          <h3 style={{ color: "white", fontWeight: "800", fontSize: "20px", margin: "0 0 20px" }}>Contact Us</h3>
          <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px" }}>• Reception 1: <a href="tel:+917077772231" style={{ color: "#5AC8D0", fontWeight: "800", textDecoration: "none" }}>+91 707 777 2231</a></li>
            <li style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px" }}>• Reception 2: <a href="tel:+917077772232" style={{ color: "#5AC8D0", fontWeight: "800", textDecoration: "none" }}>+91 707 777 2232</a></li>
            <li style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px" }}>• Emergency: <a href="tel:+917077772236" style={{ color: "#FF8A8A", fontWeight: "800", textDecoration: "none" }}>+91 707 777 2236</a></li>
            <li style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px" }}>• Laboratory: <a href="tel:+917077772237" style={{ color: "#5AC8D0", fontWeight: "800", textDecoration: "none" }}>+91 707 777 2237</a></li>
            <li style={{ color: "rgba(255,255,255,0.92)", fontSize: "16px" }}>• E-Mail: <span style={{ color: "white", fontWeight: "600" }}>kishoriglobalhospitals@gmail.com</span></li>
          </ul>
        </div>

        {/* 3rd Column - Quick Links */}
        <div>
          <h3 style={{ color: "white", fontWeight: "800", fontSize: "20px", margin: "0 0 20px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: "0", margin: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li><Link href="/about" style={{ color: "white", fontSize: "16.5px", fontWeight: "600", textDecoration: "none" }}>• About Us</Link></li>
            <li><Link href="/programs" style={{ color: "white", fontSize: "16.5px", fontWeight: "600", textDecoration: "none" }}>• Our Services</Link></li>
            <li><Link href="/gallery" style={{ color: "white", fontSize: "16.5px", fontWeight: "600", textDecoration: "none" }}>• Gallery</Link></li>
            <li><Link href="/contact" style={{ color: "white", fontSize: "16.5px", fontWeight: "600", textDecoration: "none" }}>• Contact & Location</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", textAlign: "center", padding: "20px 24px", color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
        © {new Date().getFullYear()} Kishori Global Hospital, Bargarh. All Rights Reserved.
      </div>
    </footer>
  );
}