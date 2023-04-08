import { Container } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HomeSlides from "../../components/home slides/homeSlides";
import Offers from "../../components/offers/Offers";

const Home = () => {

   
    return (
        <>
            <Header />
            <Offers />
                <HomeSlides next = {"first-next"} prev = {"first-prev"} />
                <HomeSlides next = {"second-next"} prev = {"second-prev"} />
                <HomeSlides next = {"third-next"} prev = {"third-prev"} />
            <Footer />
        </>
    )
}

export default Home;
