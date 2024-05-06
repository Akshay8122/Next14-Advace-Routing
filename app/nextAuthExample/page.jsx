import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
        return NextResponse.next();
      }}
    >
      <p className="font-bold text-black">
        Status:
        <span className="text-red-500 "> You are not logged in</span>
      </p>
      <button
        className="w-auto text-white p-2 mt-4 bg-gray-500 rounded  "
        type="submit"
      >
        Sign in with GitHub
      </button>
    </form>
  );
}

function SignOut({ children }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <p>{children}</p>
      <button
        type="submit"
        className="w-auto text-white p-2 mt-4 bg-gray-500 rounded  "
      >
        Sign Out
      </button>
    </form>
  );
}

function BackToLogin() {
  return (
    <form
      action={async () => {
        "use server";
        redirect("/");
      }}
    >
      <button className="w-auto text-white p-2 mt-4 bg-gray-500 rounded  ">
        Back To Login
      </button>
    </form>
  );
}

export default async function Page() {
  let session = await auth();
  let user = session?.user.name;

  return (
    <section className="flex-col mx-auto my-80 ">
      <h1 className="text-3xl font-mono font-semibold">
        NextAuth With GitHub Provider
      </h1>
      <br />
      <div className="text-xl font-bold text-orange-500">
        {user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}
        {user && <BackToLogin />}
      </div>
    </section>
  );
}
