import Logo from "./Logo"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"
export default function Navbar(){
  return(
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  )
}