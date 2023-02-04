import Header from "./components/Header";
import Hero from "./components/Hero";
import InnerContent from "./components/InnerContent";

function App() {
  return (
    <div className="">
      <Header />
      <Hero
        subheading="sub heading"
        headingText="heading text"
        body="body one paragraph"
        body2="body two paragraph"
        btnLink="#"
        btnText="learn more"
        imgSrc={
          "https://dev3.growthbydesign.org/wp-content/uploads/2022/11/checking-hero.png"
        }
      />
      <InnerContent />
    </div>
  );
}

export default App;
