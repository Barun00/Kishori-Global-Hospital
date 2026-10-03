// components/common/SectionTitle.tsx
import Reveal from "./Reveal";

export default function SectionTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <Reveal className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2F4A]">{title}</h2>
      {subtitle && <p className="text-[#2E8AA8] mt-3">{subtitle}</p>}
      <div className="w-16 h-1 bg-[#2E8AA8] mx-auto mt-4 rounded-full"></div>
    </Reveal>
  );
}