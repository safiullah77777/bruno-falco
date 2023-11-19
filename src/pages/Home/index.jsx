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
import Accordian from "../../components/Accordian";
import FAQs from "../../components/FAQs";

function Home() {
  return (
    <div className="relative min-h-[100vh]">
      {/* <div className="absolute top-0 left-0 w-full">
        <div className="w-full">
          <img src={bg1} alt="bg1" className="w-full" />
        </div>
      </div> */}
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
        <div className="section3 w-full pt-[15rem] flex flex-col">
          <h2 className="h2 !text-white !text-[4.5rem] mx-auto relative top-[0rem]">
            Full course catalog
          </h2>
          <div className="relative top-[5rem]">
            <VideoplayerWithList />
          </div>
        </div>
        <div className="flex flex-col gap-[9rem] section4">
          <VideoplayerWithList isReverse />
          <VideoplayerWithList />
          <VideoplayerWithList isReverse />
        </div>
      </div>
      <Launch />
      <div className="section5">
        <Review />
        <FAQs />
      </div>
    </div>
  );
}

export default Home;
