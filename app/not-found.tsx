import Link from "next/link";
import { CustomLayout } from "../components/layout/custom-layout";

export default function Page() {
  return (
    <CustomLayout>
      <main className="flex flex-col gap-2">
        <h1>404 page</h1>
        <Link href="/" className="underline text-red-500">
          Back to landing page
        </Link>
      </main>
    </CustomLayout>
  );
}
