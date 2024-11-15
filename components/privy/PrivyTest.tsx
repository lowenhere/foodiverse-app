"use client";

import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { SendZeroEth } from "../SendZeroEth";

export default function PrivyTest() {
  const [verifyResult, setVerifyResult] = useState();
  const {
    user,
    linkEmail,
    linkWallet,
    unlinkEmail,
    linkPhone,
    unlinkPhone,
    unlinkWallet,
    linkGoogle,
    unlinkGoogle,
    linkTwitter,
    unlinkTwitter,
    linkDiscord,
    unlinkDiscord,
  } = usePrivy();

  const numAccounts = user?.linkedAccounts?.length || 0;
  const canRemoveAccount = numAccounts > 1;

  const email = user?.email;
  const phone = user?.phone;
  const wallet = user?.wallet;

  const googleSubject = user?.google?.subject || null;
  const twitterSubject = user?.twitter?.subject || null;
  const discordSubject = user?.discord?.subject || null;

  return (
    <div>
      <div className="mt-12 flex gap-4 flex-wrap">
        <SendZeroEth />
        {googleSubject ? (
          <button
            onClick={() => {
              unlinkGoogle(googleSubject);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink Google
          </button>
        ) : (
          <button
            onClick={() => {
              linkGoogle();
            }}
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white"
          >
            Link Google
          </button>
        )}

        {twitterSubject ? (
          <button
            onClick={() => {
              unlinkTwitter(twitterSubject);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink Twitter
          </button>
        ) : (
          <button
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white"
            onClick={() => {
              linkTwitter();
            }}
          >
            Link Twitter
          </button>
        )}

        {discordSubject ? (
          <button
            onClick={() => {
              unlinkDiscord(discordSubject);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink Discord
          </button>
        ) : (
          <button
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white"
            onClick={() => {
              linkDiscord();
            }}
          >
            Link Discord
          </button>
        )}

        {email ? (
          <button
            onClick={() => {
              unlinkEmail(email.address);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink email
          </button>
        ) : (
          <button
            onClick={linkEmail}
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white"
          >
            Connect email
          </button>
        )}
        {wallet ? (
          <button
            onClick={() => {
              unlinkWallet(wallet.address);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink wallet
          </button>
        ) : (
          <button
            onClick={linkWallet}
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white border-none"
          >
            Connect wallet
          </button>
        )}
        {phone ? (
          <button
            onClick={() => {
              unlinkPhone(phone.number);
            }}
            className="text-sm border border-violet-600 hover:border-violet-700 py-2 px-4 rounded-md text-violet-600 hover:text-violet-700 disabled:border-gray-500 disabled:text-gray-500 hover:disabled:text-gray-500"
            disabled={!canRemoveAccount}
          >
            Unlink phone
          </button>
        ) : (
          <button
            onClick={linkPhone}
            className="text-sm bg-violet-600 hover:bg-violet-700 py-2 px-4 rounded-md text-white border-none"
          >
            Connect phone
          </button>
        )}
      </div>

      {Boolean(verifyResult) && (
        <details className="w-full">
          <summary className="mt-6 font-bold uppercase text-sm text-gray-600">
            Server verify result
          </summary>
          <pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
            {JSON.stringify(verifyResult, null, 2)}
          </pre>
        </details>
      )}

      <p className="mt-6 font-bold uppercase text-sm text-gray-600">
        User object
      </p>
      <pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}