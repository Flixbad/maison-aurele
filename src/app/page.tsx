import { Booking } from "@/components/Booking";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Services />
      <Philosophy />
      <Team />
      <Gallery />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  );
}
