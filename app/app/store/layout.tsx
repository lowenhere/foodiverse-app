"use client";

import NavBar from "@/components/NavBar";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <NavBar/>
    <div>
      {children}
    </div>
  </>;
}
