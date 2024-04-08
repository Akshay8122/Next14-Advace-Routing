"use client";

import { auth } from "../lib/auth";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  return (
    <div className="w-full flex justify-center h-screen">
      <button
        className="font-serif text-2xl font-bold"
        onClick={async () => {
          auth();
        }}
      >
        Click here to login
      </button>
    </div>
  );
}
