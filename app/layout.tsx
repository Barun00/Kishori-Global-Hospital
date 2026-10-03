import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/common/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";

export const metadata = {
  title: "Kishori Global Hospital | Caring for You - Bargarh",
  description: "Best Hospital in Sayan, Bargarh - 24x7 Emergency Service",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}