import AnimatedHeader from "components/AnimatedHeader";
import SponsorsSection from "components/SponsorsSection";
import HeroSection from "../../components/home/HeroSection";
import CtaButton from "../../components/home/CtaButton";
import AudienceSection from "../../components/home/AudienceSection";
import MissionSection from "../../components/home/MissionSection";
import ParallaxImageSection from "../../components/home/ParallaxImageSection";
import Footer from "../../components/home/Footer";
import Page from "../../components/Page";

const Home: React.FC = () => (
  <Page>
    <AnimatedHeader />
    <CtaButton />
    <HeroSection />
    <AudienceSection />
    <MissionSection />
    <ParallaxImageSection />
    <SponsorsSection />
    <Footer />
  </Page>
);

export default Home;
