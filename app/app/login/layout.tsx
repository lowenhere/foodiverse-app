"use client";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center justify-center text-center h-screen p-4">
      {children}
    </main>
  );
}
