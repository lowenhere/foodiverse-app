"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";

export default function PrivyProfile(){
  const { user } = usePrivy();
  return (
    <>
      {JSON.stringify(user)}
    </>
  )
}