import { cookies } from "next/headers";

export default function Page() {
  // enable cookie for dynamic fetchig data at production time
  cookies();
  return (
    <section>
      <h2>App router</h2>
      <p>{Date.now()}</p>
    </section>
  );
}
