"use client";

import NavBar from "@/components/NavBar";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="container-md h-full flex flex-col items-center p-4">
        {children}
      </main>
    </>
  );
}
