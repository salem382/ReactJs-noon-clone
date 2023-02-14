
import {Row, Col, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import './uperheader.scss';
import Sign from '../singnComponent/sign/Sign';
import { useDispatch } from 'react-redux';
import {setOpenSign} from '../../store/showSignSlice';
import { Link } from 'react-router-dom';

const UperHeader = () => {

    const dispatch = useDispatch();

    return (
        <header className='header py-2'>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col className='col-md-4 col-2'>
                        <div className='d-flex justify-content-around align-items-center'>
                            <Link to={'/'}><img src='./images/logo.svg' className='ms-auto noon-logo' alt='logo'/></Link>
                            <div className='d-md-flex d-none align-items-center arrived_to'>
                                <img src='./images/Egypt.svg' alt='logo'/>
                                <p className='mx-2'>تسليم الي  <br />
                                    القاهره
                                </p>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <form>
                            <input className='pe-2 form-input rounded w-100' placeholder='أنت بدور علي أية'/>
                        </form>
                    </Col>
                    <Col className='col-md-4 col-6'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div onClick={() => dispatch(setOpenSign(true))} className='d-flex justify-content-between uperHeader-log-in'>
                                <p className='ms-sm-3 ms-1'
                                style={{cursor:'pointer'}}>تسجيل الدخول</p>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className='d-flex'>
                                <p className='ms-sm-3 ms-1'>عربة التسوق</p>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Sign/>
        </header>
    )
}

export default UperHeader;