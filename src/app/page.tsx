import HeroInput from "@/components/HeroInput";
import HeroLink from "@/components/HeroLink";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4">
        <div className="mt-8 sm:mt-10 md:mt-20 lg:mt-[120px] lg:grid grid-cols-8 mb-4 md:mb-6 lg:mb-12">
          <h1 className="col-span-6 col-start-2 text-center font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-[54px] leading-8 sm:leading-10 md:leading-14 lg:leading-16"><span className="text-accent">Short links</span>, long impact. Transform cluttered URLs into clean, shareable links.</h1>

          <HeroInput />

          <HeroLink />
        </div>

        <Link href="/dashboard" className="flex justify-center text-button-primary text-base sm:text-[18px] md:text-xl lg:text-2xl text-center pb-4 md:pb-6">View all links</Link>
      </main>
    </>
  );
}
