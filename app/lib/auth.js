"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function auth() {
  cookies().set("isLoggedIn", "true");
  redirect("/");
}

export async function deleteCookie() {
  cookies().delete("isLoggedIn");
}
