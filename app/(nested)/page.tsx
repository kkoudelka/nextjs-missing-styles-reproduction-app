import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col gap-2">
      <h1>Landing page</h1>
      <Link href="/asdfasdf" className="underline text-red-500">
        404 page
      </Link>
    </main>
  );
}
