// when we don't want to store into cache then we want to use noStore or cookies

import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";

async function GetProductQuantity() {
  noStore(); // directly use noStore(Opt out from cache)
  const res = await fetch(
    `${process.env.PUBLLIC_API_URL}/2`
    //    {
    //     cache: "no-store",
    // you can also go with this fetch configuration option in result you got (cache: SKIP) while refresh data(Opt out)
    //   }
  );
  let data = await res.json();
  return <h1>{data?.stock}</h1>;
}

export default function Page() {
  return (
    <section className="mx-auto my-10">
      <h2>Product</h2>
      <Suspense fallback={"...Loading"}>
        <GetProductQuantity />
      </Suspense>
    </section>
  );
}
