import Link from "next/link";
// import Layout from "../components/Layout";

export default function Library() {
  return (
    // <Layout>
    <div className="p-5">
      <h1 className="text-3xl font-bold">Library of Plants</h1>
      <p>
        <Link href="/camera">Camera</Link>
      </p>
    </div>
    // </Layout>
  );
}
