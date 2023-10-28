
import Header from "../components/UI/Header"
import Footer from "../components/UI/Footer"
import Menu from "../components/UI/Menu"
import SocialMedia from "../components/social/SocialMediaBar"


import "./About.css"


const text = `
دکتر حسن طالب زاده فاروجی متخصص جراحی جنرال، پلاستیک و ترمیمی دارای بورد تخصصی ناسیونال،  دوره پزشکی عمومی خود را در دانشگاه علوم پزشکی مشهد و دوره تخصصی خود را در کاشان گذرانده است. ایشان عضو هیئت درمانی مشهد، با سابقه ریاست بخش جراحی بیمارستان فوق تخصصی شریعتی و ریاست اتاق عمل خراسان شمالی می باشند

و دارای گواهینامه های تخصصی به صورت حرفه ای در دوره های جراحی ابدومینوپلاستی، ماموپلاستی پیکرتراشی و پروتز سینه  و سایر اعمال جراحی زیبایی می باشند. ایشان با سابقه بالای ۱۲ سال در حیطه جراحی های زیبایی در مشهد در حال فعالیت هستند.

`


function About() {
  return (
    <div>
        <Header />
        <Menu />
        <SocialMedia />
        <p className="about_text">{text}</p>
        <div className="about_image">
        </div>
        <Footer />

    </div>
  )
}

export default About