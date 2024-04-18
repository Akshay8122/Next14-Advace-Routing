// if you want empty a cache and rquired refresh data => cltr + shift + r (hard reload | refresh) in result you get (CACHE:SKIP)
// when you're refresh page on this route then it's make every time new request in result (CACHE:HIT)

async function GetProductQuantity() {
  let res = await fetch(`${process.env.PUBLLIC_API_URL}/3`);
  let data = await res.json();
  return <h1>{data.stock}</h1>;
}

export default function Page() {
  return (
    <section className="flex mx-auto my-4 justify-center">
      <h1>Product</h1>
      &nbsp;
      <GetProductQuantity />
    </section>
  );
}
