import { Counter } from "@/components/counter";

export default function Home({ params }) {
    const { id } = params;
    console.log(id)
  return (
    <>
          <div className="mt-20 text-4xl">TEST変更{id}</div>
      <Counter></Counter>
    </>
  );
}
