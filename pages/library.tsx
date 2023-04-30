import Link from "next/link";

export default function Library() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Library of Plants</h1>
      <p>
        <Link href="/camera">Camera</Link>
      </p>
    </div>
  );
}
