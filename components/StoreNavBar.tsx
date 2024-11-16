'use client'

import * as React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

import { useStore } from "@/components/providers/StoreProvider";

type NavBarProps = {
  profileImageSrc?: string;
  loggedIn?: boolean;
  children?: React.ReactNode[];
};

const NavBar: React.FC<NavBarProps> = ({
  profileImageSrc,
  loggedIn = false,
  children = [],
}) => {
  const storeData = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const profileIcon = profileImageSrc ? (
    <img alt="" src={profileImageSrc} />
  ) : (
    <User />
  );

  const dropdownItems = [
    { name: "Profile", to: "/app/profile", visible: true },
    { name: "Login", to: "/app/login", visible: !loggedIn },
    { name: "Logout", to: "/app/logout", visible: loggedIn },
  ]
    .filter((d) => d.visible)
    .map(({ name, to }) => (
        <DropdownMenuItem key={to}>
          <Link href={to}>{name}</Link>
        </DropdownMenuItem>
    ));

  return (
    <nav className="sticky top-0 z-10 bg-white shadow w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={`/app/store/${storeData.data?.id}`} className="flex-shrink-0">
              <span className="text-l font-bold text-primary">
                {storeData.data?.name ?? "Foodiverse" }
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
          </div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="rounded-full p-4 text-lg">
                  {profileIcon}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {dropdownItems}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
