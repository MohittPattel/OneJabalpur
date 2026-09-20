import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CardGrid from "@/components/CardGrid";
import FeaturedPlaces from "@/components/FeaturedPlaces";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <CardGrid />
        <FeaturedPlaces />
        <FeatureSection />
      </main>
      <Footer />
    </>
  );
}
