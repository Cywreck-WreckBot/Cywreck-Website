import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/floating-navbar";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "https://cywreck.in/",
    },
    {
      name: "VCISO",
      link: "/",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Blogs",
      link: "https://blog.cywreck.in/",
    }
  ];

  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
