import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full py-[40px] bg-[#e5e5e5] home-section">
      <div className="block md:flex gap-x-10">
        <div>
          <Link className="text-lg" href="/">
            <Image alt="" src="/logo.png" height={100} width={100} />
          </Link>
          <div className="pt-[5px] text-sm">
            <p>Build real-world mobile apps.</p>
            <p>Sharpen your development skills. </p>
          </div>
        </div>
        <div className="md:flex md:flex-row w-full md:justify-evenly flex-col gap-y-4">
          <div>
            <p className="text-lg font-bold">Product</p>
            <div className="flex flex-col gap-y-2 py-[5px] text-sm">
              <Link href="/challenges">Challenges</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="">How it works</Link>
              <Link href="">FAQ</Link>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">Community</p>
            <div className="flex flex-col gap-y-2 py-[5px] text-sm">
              <a href="">GitHub</a>
              <a href="">Discord</a>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold">Legal</p>
            <div className="flex gap-y-2 text-sm flex-col py-[5px]">
              <Link href="">Privacy</Link>
              <Link href="">Terms</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <span>&copy; 2026</span>
        <div className="flex gap-x-3"></div>
      </div>
    </div>
  );
}
