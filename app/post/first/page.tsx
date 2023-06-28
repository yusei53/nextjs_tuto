import Link from "next/link";

export default function First() {
    return (
      <>
        <h1>First Post</h1>
        <h2>
          <Link href="/post">Back to home</Link>
        </h2>
      </>
    );
}
