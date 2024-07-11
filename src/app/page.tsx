import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between">
      <Hero />
    </main>
  );
}
