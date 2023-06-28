export function generateStaticParams() {
    return [{id : "1"}, {id : "10"}]
}

export default async function Page({ params } : {params: {id :string} }) {
    const { id } = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(user.name);
  return (
    <>
          <div className="mt-20 text-4xl">TEST変更{user.name}</div>
    </>
  );
}
