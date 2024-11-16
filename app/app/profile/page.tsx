"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import StoreNavBar from "@/components/StoreNavBar";
import { useSettings, Settings } from "@/components/providers/SettingsProvider";
import PrivyProfile from "@/app/app/profile/privy";
import TelegramProfile from "@/app/app/profile/telegram";
import DynamicProfile from "@/app/app/profile/dynamic";

export default function ProfilePage() {
  const router = useRouter();
  const { settings } = useSettings();

  let content = <p>Provider {settings.authProvider} not implemented</p>;
  if (settings.authProvider === "privy") {
    content = (
      <>
        <div className="mb-4">
          <h2 className="text-l font-bold">Telegram</h2>
          <TelegramProfile />
        </div>
        <div className="mb-4">
          <h2 className="text-l font-bold">Privy</h2>
          <PrivyProfile />
        </div>
      </>
    );
  }

  if (settings.authProvider === "dynamic") {
    content = <DynamicProfile />;
  }

  return (
    <>
      <StoreNavBar />
      <main className="container h-full flex flex-col items-center p-4">
        <div className="flex items-center w-full mb-4">
          <Button
            className="w-6 mr-2"
            onClick={() => router.back()}
            variant="link"
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        {content}
      </main>
    </>
  );
}
