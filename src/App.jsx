import Header from "./components/Header";
import Hero from "./components/Hero";
import InnerContent from "./components/InnerContent";

function App() {
  return (
    <div className="">
      <Header />
      <Hero
        headingText="Checking with Telco Plus"
        subheading="CHECKING"
        body="Banking is personal, so we offer various services and solutions to meet your needs. From our easy-to-use digital banking tools to the convenience of Mobile Banking, there are many ways we can make your life easier."
        body2="Checking is one of the most important accounts you will open here at Telco Plus. You can access your account online, or in person. We offer a wide range of additional services and tools such as paperless statements, alerts for low balances and new deposits, direct deposit, and free bill pay. Check out all of our checking products today!"
        btnLink="https://www.growthbydesign.org/"
        btnText="open an account"
        imgSrc={
          "https://dev3.growthbydesign.org/wp-content/uploads/2022/11/checking-hero.png"
        }
      />
      <InnerContent />
    </div>
  );
}

export default App;
