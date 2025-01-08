// import Message from "./Message";
import AboutSection from "./AboutSection";
import "./App.css";
import BuySellRepeater from "./BuySellRepeater";
import CallToActionSection from "./CallToActionSection";
import ExclusiveListingsForm from "./ExclusiveListingsForm";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HomesSoldCarousel from "./HomesSoldCarousel";
import ReviewSection from "./ReviewSection";

function App() {
  return (
    <main>
      <section>
        <Header></Header>
      </section>
      <section className="relative flex flex-col justify-center items-center w-full h-full z-[2]">
        <Hero></Hero>
      </section>
      <section>
        <AboutSection></AboutSection>
      </section>
      <section>
        <CallToActionSection></CallToActionSection>
      </section>
      <section>
        <BuySellRepeater></BuySellRepeater>
      </section>
      <section>
        <ExclusiveListingsForm></ExclusiveListingsForm>
      </section>
      <section className="flex">
        <HomesSoldCarousel></HomesSoldCarousel>
      </section>
      <section>
        <ReviewSection></ReviewSection>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </main>
  );
}

export default App;
