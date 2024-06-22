"use client";

import Nav from "@/components/home/nav";

export default function Header() {
  return (
    <header className="h-14 px-5 sticky top-0 z-50 w-full border-b flex justify-between items-center bg-background">
      <div className="flex items-center">
        <Nav />
      </div>
    </header>
  );
}
