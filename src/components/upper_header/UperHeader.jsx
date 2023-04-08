
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
            <Container >
                <Row className='align-items-center'>
                    <Col className='col-md-4 col-2'>
                        <div className='d-flex justify-content-start'>
                            <Link to={'/'}><img src='./images/logo.svg' className='noon-logo' alt='logo'/></Link>
                            {/* <div className='d-md-flex d-none align-items-center arrived_to'>
                                <img src='./images/Egypt.svg' alt='logo'/>
                                <p className='mx-2'>تسليم الي  <br />
                                    القاهره
                                </p>
                                <FontAwesomeIcon icon={faChevronDown}/>
                            </div> */}
                        </div>
                    </Col>
                    <Col>
                        <form>
                            <input className='px-2 form-input rounded w-100' placeholder="What are you looking for"/>
                        </form>
                    </Col>
                    <Col className='col-md-4 col-6'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div onClick={() => dispatch(setOpenSign(true))} className='d-flex justify-content-between uperHeader-log-in'>
                                <p className='ms-sm-3 mx-1 '
                                style={{cursor:'pointer'}}>Sign in</p>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className='d-flex'>
                                <p className='ms-sm-3 mx-1 '>Cart</p>
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