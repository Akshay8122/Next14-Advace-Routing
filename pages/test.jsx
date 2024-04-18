export function getStaticProps() {
  return {
    props: {
      date: Date.now(),
    },
  };
}

export default function Page({ date }) {
  return (
    <sectio>
      Page Router
      <p>{date}</p>
    </sectio>
  );
}
