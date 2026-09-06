"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

type Children = {
  children: React.ReactNode;
};

export default function LayoutWrapper({ children }: Children) {
  const pathName = usePathname();

  const shouldHideNavbar = pathName.startsWith("/challenges")
  return (
    <div>
      {!shouldHideNavbar && <NavBar />}
      {children}
    </div>
  );
}
