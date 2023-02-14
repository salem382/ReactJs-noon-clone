import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faTrashCan} from '@fortawesome/free-regular-svg-icons';

const CartComponents = () => {

    return (
        <Container className="my-4">
            <Row>
                <Col className="col-2">
                    <img src="/images/products/product.avif" className="w-100" style={{height:"100px"}} alt="product"/>
                </Col>
                <Col className="col-7">
                    <div>
                        هذا وصف هذا وصف هذا وصف هذا وصف 
                        هذا وصف هذا وصف هذا وصف هذا وصف 
                    </div>
                </Col>
                <Col className="col-3">
                    <p>
                        13850 جنية
                    </p>
                </Col>
                <Col className="col-12">
                    <div style={{color:"#777"}} className="d-flex justify-content-between align-items-center">
                        <div role={"button"}>
                            <span><FontAwesomeIcon icon={faHeart}/> </span>
                            <span className="mx-2">إضافة إلي المفضلة</span>
                        </div>
                        <div role={"button"}>
                            <span><FontAwesomeIcon icon={faTrashCan}/> </span>
                            <span className="mx-2">إزالة</span>
                        </div>
                        <div>
                            <span className="fs-4" role={"button"}>+</span>
                            <span className="mx-3">5</span>
                            <span className="fs-4" role={"button"}>-</span>
                        </div>
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}

export default CartComponents;