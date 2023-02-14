import { Container, Row, Col } from "react-bootstrap";
import CartComponents from "../../components/cartComponents/CartComponents";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


const CartPage = () => {

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col lg={7} className='col-12'>
                        <CartComponents />
                        <CartComponents />
                        <CartComponents />
                    </Col>
                    <Col lg={5} className='col-12'>
                    <div>
                       <div className="d-flex align-items-center">
                            <p className="fw-bold fs-4">المجموع الكلي </p>
                            <p className="mx-3" style={{color:"#777"}}>(يشمل ضريبة القيمة المضافة)</p>
                            <p className="fw-bold fs-4">1350 جنية </p>
                       </div>
                       <div className="btn btn-primary px-5 w-100 mt-5 py-2">
                            إتمام الشراء
                       </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default CartPage;