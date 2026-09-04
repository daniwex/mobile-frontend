import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full h-[100px] grid justify-center margin-bottom-sm">
      <div className="hidden md:flex justify-between items-center logo px-6 md:w-7xl">
        <Link href="/" className="center-nav">Logo</Link>
        <div className="flex gap-x-5">
          <div className="flex gap-x-5 center-nav">
            <Link href="/challenges">Challenges</Link>
            <Link href="">Community</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="">Get started</Link>
            <Link href="">Shortcut</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
