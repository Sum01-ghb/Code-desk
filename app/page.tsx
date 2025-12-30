import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Button>Get started</Button>
    </div>
  );
}
