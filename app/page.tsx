import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="flex justify-center items-center flex-col sm:px-5 z-7 overflow-clip">
          <Grid />
          <div className="max-w-7xl items-center justify-center">
            <RecentProjects />
            <Testimonials />
            <Experience />
          </div>
        </div>
      </div>
    </main>
  );
}
