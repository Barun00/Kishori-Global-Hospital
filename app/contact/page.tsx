import Reveal from "@/components/common/Reveal";

export default function ContactPage() {
  return (
    <div className="bg-[#F1F9FB] py-16 px-6">
      <Reveal>
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border">
          <div className="bg-[#0A2F4A] text-white text-center py-8">
            <h1 className="text-3xl font-extrabold">Contact Information</h1>
            <p className="text-[#2E8AA8] font-semibold">KISHORI GLOBAL HOSPITAL</p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="p-8 space-y-3">
              <h3 className="font-bold text-[#0A2F4A] text-lg">Hospital Address</h3>
              <p className="text-gray-600">At- Sayan, P.O.- Deogaon,<br/>Dist.- Baragada, Odisha, India<br/>Zip Code: <b className="text-[#0A2F4A]">768038</b></p>
              <p className="pt-4 text-sm"><b>E-Mail:</b> kishoriglobalhospitals@gmail.com</p>
              <p className="text-sm"><b>Website:</b> www.kishoriglobalhospitals.com</p>
            </div>
            <div className="p-8 bg-[#F1F9FB]/50 space-y-2 border-l">
              <h3 className="font-bold text-[#0A2F4A] text-lg">Telephone</h3>
              <p>Reception 1: <a href="tel:+917077772231" className="text-[#2E8AA8] font-bold">+91 707 777 2231</a></p>
              <p>Reception 2: <a href="tel:+917077772232" className="text-[#2E8AA8] font-bold">+91 707 777 2232</a></p>
              <p>Emergency: <a href="tel:+917077772236" className="text-red-600 font-bold">+91 707 777 2236</a></p>
              <p>Laboratory: <a href="tel:+917077772237" className="text-[#2E8AA8] font-bold">+91 707 777 2237</a></p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}