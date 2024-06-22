"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/ui";

export const navs = [
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Nav() {
  return (
    <nav className="sm:flex hidden items-center space-x-6 text-sm font-medium gap-2">
      {navs.map(({ href, label }) => (
        <NavItem href={href} label={label} key={label} />
      ))}
    </nav>
  );
}

export function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80 py-3",
        pathname?.startsWith(href) ? "text-foreground" : "text-foreground/60"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
