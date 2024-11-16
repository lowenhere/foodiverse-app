"use client";
import { ReactNode } from "react";
import { useParams, usePathname } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useIsLoggedIn as useDynamicIsLoggedIn } from "@dynamic-labs/sdk-react-core";

import StoreNavBar from "@/components/StoreNavBar";
import { StoreProvider, useStore } from "@/components/providers/StoreProvider";
import { CartProvider } from "@/components/providers/CartProvider";
import { useSettings } from "@/components/providers/SettingsProvider";

export default function StoreLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { storeId } = useParams<{ storeId: string }>();
  const pathname = usePathname();

  const { authenticated: privyAuthed } = usePrivy();
  const dynamicAuthed = useDynamicIsLoggedIn();

  const { settings } = useSettings();

  let loggedIn = false;
  if (settings.authProvider === "privy") {
    loggedIn = privyAuthed;
  }

  if (settings.authProvider === "dynamic") {
    loggedIn = dynamicAuthed;
  }

  return (
    <StoreProvider storeId={storeId}>
      <CartProvider storeId={storeId}>
        <NavBar loggedIn={loggedIn} pathname={pathname} />
        <main className="container h-full flex flex-col items-center p-4">
          {children}
        </main>
      </CartProvider>
    </StoreProvider>
  );
}

const NavBar = ({
  loggedIn,
  pathname,
}: {
  loggedIn: boolean;
  pathname: string;
}) => {
  const { data } = useStore();
  return (
    <StoreNavBar
      title={data?.name}
      href={`/app/store/${data?.id}`}
      loggedIn={loggedIn}
      referrer={pathname}
    />
  );
};
