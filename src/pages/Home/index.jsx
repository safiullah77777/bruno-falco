import Header from "../../components/Header";
import Sticker from "../../components/Sticker";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import Info from "../../components/Info";
import Learning from "../../components/Learning";
import Testimonial from "../../components/Testimonial";
import VideoplayerWithList from "../../components/VideoplayerWithList";
import Launch from "../../components/Launch";
import Review from "../../components/Review";

import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";
import Cources from "../../components/Cources";

function Home() {
  return (
    <main className="relative min-h-[100vh] home pb-[9.4rem]">
        <Sticker />
        <Header />
        <Banner />
        <Features />
        <Info />
        <Learning />
        <Testimonial />
        <Cources />
        <Launch />
        <Review />
        <FAQs />
        <Footer />
    </main>
  );
}

export default Home;
