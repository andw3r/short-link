import Link from "next/link";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="bg-navbar w-full h-14 md:h-16 xl:h-[68px] border-header border-b-2 px-4 flex items-center">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/" className="w-10 md:w-11 lg:w-12 h-10 md:h-11 lg:h-12">
          <Logo />
        </Link>

        <ul className="flex gap-4 text-sm sm:text-base">
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
}
