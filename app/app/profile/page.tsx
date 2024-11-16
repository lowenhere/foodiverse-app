"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import StoreNavBar from "@/components/StoreNavBar";
import { useSettings, Settings } from "@/components/providers/SettingsProvider";
import  PrivyProfile  from "@/app/app/profile/privy";

export default function ProfilePage() {
  const router = useRouter();
  const { settings } = useSettings();

  let profile = <p>{settings.authProvider} not implemented</p>
  if (settings.authProvider === "privy"){
    profile = <PrivyProfile/>
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
      {profile}
    </main>
    </>
  );
}
