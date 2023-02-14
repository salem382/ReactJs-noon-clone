import { Container, Row, Col } from "react-bootstrap";
import {faFacebook, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <section style={{background:"#f1f1f1"}} className='py-5 mt-5'>
            <Container>
                <Row>
                <Col className="col-12" md={4}>
                        <div>
                             © 2023 noon. كل الحقوق محفوظة
                        </div>
                    </Col>
                    
                    <Col className="col-12 my-md-0 my-4" md={4}>
                        <div className="d-flex">
                            <img style={{width:"50px"}} src="/images/1.svg" alt="icon"/>
                            <img style={{width:"50px"}} src="/images/2.png" className="mx-3" alt="icon"/>
                            <img style={{width:"50px"}} src="/images/3.svg" alt="icon"/>
                        </div>
                    </Col>
                    <Col className="col-12" md={4}>
                        <div className="d-flex">
                            <div style={{width:"40px", height:"40px", background:"#FEEE00", lineHeight:"40px"}} className='rounded-circle text-center mx-2' >
                                <FontAwesomeIcon icon={faFacebook} className='fs-5'/>
                            </div>
                            <div style={{width:"40px", height:"40px", background:"#FEEE00", lineHeight:"40px"}} className='rounded-circle text-center mx-2' >
                                <FontAwesomeIcon icon={faInstagram} className='fs-5'/>
                            </div>
                            <div style={{width:"40px", height:"40px", background:"#FEEE00", lineHeight:"40px"}} className='rounded-circle text-center mx-2' >
                                <FontAwesomeIcon icon={faLinkedin} className='fs-5'/>
                            </div>
                            <div style={{width:"40px", height:"40px", background:"#FEEE00", lineHeight:"40px"}} className='rounded-circle text-center mx-2' >
                                <FontAwesomeIcon icon={faYoutube} className='fs-5'/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;