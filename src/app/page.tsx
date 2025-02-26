"use client";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import FloatingNav from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import dynamic from "next/dynamic";

// const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
// const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
// const Experience = dynamic(() => import("@/components/Experience"), {
//   ssr: false,
// });
// const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });
// const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
// const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
//   ssr: false,
// });
// const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
