import React, { ReactNode } from "react";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

import { useStore } from "@/components/providers/StoreProvider";

type NavBarProps = {
  profileImageSrc?: string;
  loggedIn?: boolean;
  children?: ReactNode[];
};

const NavBar: React.FC<NavBarProps> = ({
  profileImageSrc,
  loggedIn = false,
  children = [],
}) => {
  const storeData = useStore();

  const profileIcon = profileImageSrc ? (
    <img alt="" src={profileImageSrc} />
  ) : (
    <UserIcon />
  );

  const dropdownItems = [
    { name: "Profile", to: "/app/profile", visible: true },
    { name: "Login", to: "/app/login", visible: !loggedIn },
    { name: "Logout", to: "/app/logout", visible: loggedIn },
  ]
    .filter((d) => d.visible)
    .map(({ name, to }) => (
      <li key={to}>
        <Link href={to}>{name}</Link>
      </li>
    ));

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          className="btn btn-ghost"
          href={`/app/store/${storeData.data?.id}`}
        >
          {storeData.data?.name || "Foodiverse"}
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* other elements */}
        <div>{children}</div>
        {/* profile dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full border">{profileIcon}</div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-32 p-2 shadow"
          >
            {dropdownItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
