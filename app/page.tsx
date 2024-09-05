import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero2 from "@/components/Hero2";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 z-7 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero2 />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
      </div>
    </main>
  );
}
