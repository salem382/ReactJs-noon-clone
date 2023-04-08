import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { faHeart, faStar, faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from "../../components/start/Star";

const ProductPage = () => {

    return (
        <>
        <Header />
        <Container>
           <Row className="mt-4">
                <Col className='col-12' md={6}>
                    <div className="d-flex justify-content-between">
                        <div className="w-25">
                            <p><img className="w-50" style={{height:"75px"}} src="/images/products/product.avif" alt='product'/></p>
                            <p><img className="w-50" style={{height:"75px"}} src="/images/products/product.avif" alt='product'/></p>
                            <p><img className="w-50" style={{height:"75px"}} src="/images/products/product.avif" alt='product'/></p>
                            <p><img className="w-50" style={{height:"75px"}} src="/images/products/product.avif" alt='product'/></p>
                        </div> 
                        <div className="w-75 ms-4">
                            <img src="/images/products/product.avif" alt='product'/>
                        </div>
                    </div>
                </Col>
                <Col className='col-12'  md={6}>
                    <div>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <p>هذا وصف هذا وصف هذا وصف هذا وصف</p>
                        <div className="d-flex">
                            <h4 className="mx-3">1430 جنية </h4>
                            <div className="d-flex me-3">
                                <span className="rounded-circle  fw-bold d-block text-center me-3 text-white" 
                                style={{background:"#080", width:'50px', height:'30px', fontSize:"13px",lineHeight:"25px"}}>
                                    4.3
                                    <FontAwesomeIcon icon={faStar} className="ms-1"/>
                                </span>
                                <span className="fw-bold text-decoration-underline" style={{color:"#999"}}> 13 Rating</span>
                            </div>
                        </div>
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
           <div>
                <h4>Reviews</h4>
                <div>
                    <div className="d-flex">
                        <img className="rounded-circle" style={{height:"75px", width:"75px"}} src="/images/products/product.avif" alt='customer'/>
                        <div className="ms-3">
                            <h5>ahmed salem</h5>
                            <Star num={3}/>
                            <p style={{color:"#999"}}>23 Dec, 2022</p>
                        </div>
                    </div>
                    <p style={{width:'250px', fontSize:"14px"}}>
                        المنتج جيد ولكن
                        <br/>
                        1. يعيب الجهاز مساحته 32 و ليس هناك اختيار لدمج الذاكرة الخارجيه مع الداخلية
                        2. عدم وجود غظاء بلاستيك يحمي ظهر الجهاز
                        3. الشاحن 10 وات فقط و الجهاز يقبل حتي 18 وات 
                        4. تلاحظ وجود تأخير في الانتقال من صفحة الي صفحة و مقارنة مع جهاز ايفون رام 3 فقط تلاحظ قرق كبير
                    </p>
                </div>
                <div>
                    <div className="d-flex">
                        <img className="rounded-circle" style={{height:"75px", width:"75px"}} src="/images/products/product.avif" alt='customer'/>
                        <div className="ms-3">
                            <h5>ahmed salem</h5>
                            <Star num={3}/>
                            <p style={{color:"#999"}}>23 Dec, 2022</p>
                        </div>
                    </div>
                    <p style={{width:'250px', fontSize:"14px"}}>
                        المنتج جيد ولكن
                        <br/>
                        1. يعيب الجهاز مساحته 32 و ليس هناك اختيار لدمج الذاكرة الخارجيه مع الداخلية
                        2. عدم وجود غظاء بلاستيك يحمي ظهر الجهاز
                        3. الشاحن 10 وات فقط و الجهاز يقبل حتي 18 وات 
                        4. تلاحظ وجود تأخير في الانتقال من صفحة الي صفحة و مقارنة مع جهاز ايفون رام 3 فقط تلاحظ قرق كبير
                    </p>
                </div>
                <div>
                    <div className="d-flex">
                        <img className="rounded-circle" style={{height:"75px", width:"75px"}} src="/images/products/product.avif" alt='customer'/>
                        <div className="ms-3">
                            <h5>ahmed salem</h5>
                            <Star num={3}/>
                            <p style={{color:"#999"}}>23 Dec, 2022</p>
                        </div>
                    </div>
                    <p style={{width:'250px', fontSize:"14px"}}>
                        المنتج جيد ولكن
                        <br/>
                        1. يعيب الجهاز مساحته 32 و ليس هناك اختيار لدمج الذاكرة الخارجيه مع الداخلية
                        2. عدم وجود غظاء بلاستيك يحمي ظهر الجهاز
                        3. الشاحن 10 وات فقط و الجهاز يقبل حتي 18 وات 
                        4. تلاحظ وجود تأخير في الانتقال من صفحة الي صفحة و مقارنة مع جهاز ايفون رام 3 فقط تلاحظ قرق كبير
                    </p>
                </div>
           </div>
           <div className="d-flex w-50">
                <p role="button" className="border px-5 py-2 d-flex align-items-center fs-5" style={{background:"rgb(247, 247, 250)rgb(247, 247, 250)"}}>
                    <FontAwesomeIcon className="mt-1 bg-none mx-3" icon={faChevronCircleLeft}/>    
                    <span>previous</span>
                </p>
                <p role="button" className="border px-5 py-2 d-flex align-items-center fs-5 ms-3" style={{background:"rgb(247, 247, 250)rgb(247, 247, 250)"}}>
                    <span>next</span>
                    <FontAwesomeIcon className="mt-1 bg-none mx-3" icon={faChevronCircleRight}/>    
                </p>
           </div>
        </Container>
        <Footer />
        </>
    )
}

export default ProductPage;