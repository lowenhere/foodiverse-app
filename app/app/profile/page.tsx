"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import StoreNavBar from "@/components/StoreNavBar";
import { useSettings, Settings } from "@/components/providers/SettingsProvider";
import PrivyProfile from "@/app/app/profile/privy";
import TelegramProfile from "@/app/app/profile/telegram";
import DynamicProfile from "@/app/app/profile/dynamic";
import { useReverseEnsLookup } from "@/lib/ensReverse";
import { useAccount } from "wagmi";

export default function ProfilePage() {
  const router = useRouter();
  const { settings } = useSettings();
  const { address } = useAccount();
  const { ensName } = useReverseEnsLookup(address);

  let content = <p>Provider {settings.authProvider} not implemented</p>;
  if (settings.authProvider === "privy") {
    return (
      <>
        {/* <div className="mb-4">
          <h2 className="text-l font-bold">Telegram</h2>
          <TelegramProfile />
        </div> */}
        <div className="w-full">
          <h2 className="text-l font-bold">Privy Profile</h2>
          <PrivyProfile />
        </div>
      </>
    );
  }

  if (settings.authProvider === "dynamic") {
    return (
      <>
        <div className="w-full flex flex-col items-center mb-4">
          <h2 className="text-l font-bold">ENS Profile</h2>
          <div className="flex flex-row items-center my-2 container max-w-3xl">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="string"
                className="grow pointer-events-none"
                disabled
                value={ensName ?? address}
              />
              <Button
                disabled={ensName !== ""}
                onClick={() => {
                  router.push("/app/profile/ens");
                }}
              >
                Setup ENS
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-l font-bold">Dynamic Profile</h2>
          <DynamicProfile />
        </div>
      </>
    );
  }

  return <p>{settings.authProvider} not implemented</p>;
}
