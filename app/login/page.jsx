"use client";

import { auth } from "../lib/cookieBasedAuth";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex-col mx-auto my-52 py-10">
        <h2 className="text-4xl font-bold">Authentication Example</h2>
        <br />
        <div className="text-xl font-mono gap-y-4 ">
          <li>
            <button
              className="font-mono text-2xl"
              onClick={async () => {
                auth();
              }}
            >
              Cookie based auth
            </button>
          </li>
          <br />
          <li>
            <Link href={"/simpleLogin"}>Jwt based auth</Link>
          </li>
          <br />
          <li>
            <Link href={"/nextAuthExample"}>Using NextAuth</Link>
          </li>
        </div>
      </div>
    </>
  );
}
