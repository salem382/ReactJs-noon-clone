import { Col, Container, Row } from "react-bootstrap";
import FavComponent from "../../components/favComponent/FavComponent";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const FavPage = () => {

    return (
        <div >
            <Header />
            <Container className="mt-5">
                <Row>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                    <Col md={2} className='col-6'>
                        <FavComponent />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default FavPage;