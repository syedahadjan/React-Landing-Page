import "./App.css";
import Button from "./components/Button";
import landingPageData from "./constant/webData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  console.log("landing page =>", landingPageData);

  const {header, hero, features, testimonials} = landingPageData

  return (
    <>
      <div>
        {/* header */}

       <Header header ={header}/>

        {/* hero section */}

       <Hero hero = {hero} />
{/* features section */}
        
<Features features={features} />

{/* tstimonials section */}

<Testimonials testimonials={testimonials} />

{/* footer */}

<Footer header={header} />




        {/* <Button bgColor={"bg-purple"} TextColor={"text-black"} borderColor={"border-red-600"} borderSize={"border-2"} label = "Home Page"></Button>
      <Button bgColor={""} borderColor={"border-amber-300"} borderSize={"border-2"} label = "About Us"></Button>
      <Button bgColor={""} borderColor={"border-purple-400"} borderSize={"border-2"} label = "Contact Us"></Button>
      <Button bgColor={""} borderColor={"border-purple-400"} borderSize={"border-2"} label = "Contact Us"></Button>
      <Button bgColor={""} borderColor={"border-purple-400"} borderSize={"border-2"} label = "Contact Us"></Button>
   
       */}
      </div>
    </>
  );
}

export default App;
