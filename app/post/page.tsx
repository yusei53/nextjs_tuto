import Link from "next/link";

export default function Page() {
    return(
    <>
      <h1 className="title">
        Read <Link href="/post/first/">this page!</Link>
      </h1>
        </>
    )
}
