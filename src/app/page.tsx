import Skills from "@/components/skills";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen h-full w-full flex flex-col max-w-[1350px] mx-auto 2xl:p-0">
      <Hero />
      <Skills />
    </main>
  );
}
