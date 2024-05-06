export function getStaticProps() {
  return {
    props: {
      date: Date.now(),
    },
  };
}

export default function Page({ date }) {
  return (
    <section>
      Page Router
      <p>{date}</p>
    </section>
  );
}
