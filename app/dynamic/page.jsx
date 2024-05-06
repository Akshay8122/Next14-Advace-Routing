import { cookies } from "next/headers";

export default function Page() {
  // cookies();
  return (
    <section>
      <h2>App router</h2>
      <p>{Date.now()}</p>
    </section>
  );
}
