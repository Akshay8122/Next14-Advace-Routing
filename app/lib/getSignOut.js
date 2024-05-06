"use server";
import { signOut } from "@/auth";
import { cookies } from "next/headers";

export async function getSignOut() {
  const cookieName = cookies().get("authjs.csrf-token")?.name;
  if (cookieName) {
    await signOut();
  } else {
    return null;
  }
}
