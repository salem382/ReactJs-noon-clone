import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductPage = () => {

    return (
        <>
        <Header />
        <Container>
           <Row>
                <Col className='col-12' md={6}>
                    <img src="/images/products/product.avif" alt='product'/>
                </Col>
                <Col className='col-12'  md={6}>
                    <div>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <h4>1430 جنية </h4>
                    </div>
                    <h5>الكميه</h5>
                    <div className="d-flex align-items-center ">
                        <div>
                            <div className="fs-4">
                                <span role={"button"}>+</span>
                                <span className="mx-3">5</span>
                                <span role={"button"}>-</span>
                            </div>
                        </div>
                        <div className="btn-primary rounded btn mx-5 px-5">
                            إضافه الي العربه
                        </div>
                        <div role={"button"} style={{width:"40px", height:"40px", background:"#e7e7e7", lineHeight:"45px"}} className='rounded-circle text-center'>
                            <FontAwesomeIcon icon={faHeart} className='fs-5'/>
                        </div>
                    </div>
                </Col>
           </Row>
        </Container>
        <Footer />
        </>
    )
}

export default ProductPage;