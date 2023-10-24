import { Fragment } from "react";
import Header from "./components/UI/Header";
import TitleAndLogo from "./components/UI/TitleAndLogo";
import ParentComponent from "./components/services/ParentComponent";
import "./App.css"
import SocialMediaBar from "./components/social/SocialMediaBar";
import Slider from "./components/slider/Slider";
import MSlider from "./components/slider/MSlider";
import Footer from "./components/UI/Footer";
import Menu from "./components/UI/Menu";


const images = [
  { url: "/images/pics/cli1.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli2.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli3.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli4.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli5.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli6.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli7.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli8.jpg", caption: "Caption for image 1" },
  { url: "/images/pics/cli9.jpg", caption: "Caption for image 1" },
];
const imageData = [
  { imageUrl: '/images/services/abdo.png', caption: 'ابدومنوپلاستی' },
  { imageUrl: '/images/services/arml.jpeg', caption: 'لیفت بازو و ران' },
  { imageUrl: '/images/services/bucc.jpeg', caption: 'جراحی بوکال فت' },
  { imageUrl: '/images/services/temp.jpeg', caption: 'لیفت ابرو  و شقیقه' },
  { imageUrl: '/images/services/mamo.jpeg', caption: 'ماموپلاستی(لیفت سینه)' },
  { imageUrl: '/images/services/fatt.png', caption: 'ترانسفر چربی صورتو سینه و باسن' },
  { imageUrl: '/images/services/face.png', caption: 'لیفت صورت و گردن' },
  { imageUrl: '/images/services/belo.jpeg', caption: 'بلفاروپلاستی' },
  { imageUrl: '/images/services/botox.jpeg', caption: 'تزریق فیلر و بوتاکس و زاویه سازی صورت' },
 
  // ... and so on until 12
];

const recentPosts = [
  { title: "Post One", link: "/post-one" },
  { title: "Post Two", link: "/post-two" },
  // more posts...
];
function App() {
  return (
    <Fragment>
      <SocialMediaBar />
      <Header />
      <Menu />
      <TitleAndLogo />
      <ParentComponent />
      <Slider images={images} />
      <MSlider slides={imageData}/>
      <Footer />

    </Fragment>
  );
}

export default App;
