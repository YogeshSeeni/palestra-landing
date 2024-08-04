import { Main } from "@/components/craft"
import Hero from "@/components/hero";
import Feature from "@/components/features";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </Main>
  );
}
