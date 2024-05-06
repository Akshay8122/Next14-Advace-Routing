import { redirect, useRouter } from "next/navigation";
import { getSession, login, logout } from "@/app/lib/basicAuth";

export default async function Page() {
  const session = await getSession();
  return (
    <section className="flex-col mx-auto  my-52 flex-wrap border border-dashed border-blue-900 p-24">
      <p className="mb-1 font-mono">JWT + COOKIE BASED AUTH </p>
      <br />
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
      >
        <input
          type="email"
          className="w-full px-8 py-2 mb-5 border rounded-md border-red-500 "
          placeholder="Enter your email"
          required
        />
        <button
          className="w-2/6 p-1 flex text-center justify-center items-center rounded-md text-white bg-gray-500"
          type="submit"
        >
          Login
        </button>
      </form>
      {/* <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
      </form> */}
      <pre className="my-4">{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
