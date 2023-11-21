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
import moon4 from "../../assets/images/moon4.png";
import moon3 from "../../assets/images/moon3.png";
import FAQs from "../../components/FAQs";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="relative min-h-[100vh]">
      <div className="flex flex-col middle w-full z-[1] section1">
        <Sticker />
        <Header />
        <Banner />
      </div>
      <div className="section2 w-full px-[2rem]">
        <Features />
        <Info />
        <Learning />
        <Testimonial />
      </div>
      <div className="flex flex-col gap-[9rem]">
        <div className="section3 w-full pt-[25rem] flex flex-col">
          <img src={moon4} className="absolute top-[35rem] left-0 z-[21] 1440:w-[20rem]" />
          <img src={moon3} className="absolute top-[10rem] right-0 z-[21] 1440:w-[30rem] 1023:top-[12rem]" />
          <h2 className="h2 !text-white !text-[4.5rem] mx-auto relative top-[0rem]">
            Full course catalog
          </h2>
          <div className="relative top-[5rem] px-[2rem] z-[223]">
            <VideoplayerWithList />
          </div>
        </div>
        <div className="flex flex-col gap-[9rem] section4 px-[2rem] z-[2323] !pt-[30rem]">
          <VideoplayerWithList isReverse />
          <VideoplayerWithList />
          <VideoplayerWithList isReverse />
        </div>
      </div>
      <Launch />
      <div className="section5 pb-[9rem] 768:pt-[4rem] px-[2rem]">
        <Review />
        <FAQs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
