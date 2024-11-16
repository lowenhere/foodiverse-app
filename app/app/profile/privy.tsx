"use client";
import React from "react";
import { usePrivy, useWallets, getEmbeddedConnectedWallet } from "@privy-io/react-auth";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export default function PrivyProfile() {
  const { user } = usePrivy();
  const { wallets } = useWallets();

  if (!user){
    return <></>
  }

  const embeddedWallet = getEmbeddedConnectedWallet(wallets)

  return (
    <Table>
      <TableBody>
        {user.google && (
          <>
            <TableRow>
              <TableCell>Google Email</TableCell>
              <TableCell>{user.google.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Google Name</TableCell>
              <TableCell>{user.google.name}</TableCell>
            </TableRow>
          </>
        )}
        <TableRow>
          <TableCell>Wallet Address</TableCell>
          <TableCell>{embeddedWallet.address}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
