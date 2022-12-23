import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {Container} from 'react-bootstrap';
import './Bottom.scss';

const BottomHeader = () => {


    return (
        <div className='d-flex align-items-start'>
            
                <div className="all pt-2 w-25 position-relative">
                    <div className='d-flex fw-bold align-items-center  justify-content-around text-primary'>
                        <span>جميع الفئات</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className='all-list position-absolute px-2 px-md-5 py-2 pt-4 border-start'
                     style={{height:'150px'}}>
                        <p>الألكترونيات</p>
                        <p>موبيلات</p>
                        <p>رجالية</p>
                    </div>
                </div>


                <ul className="bottomHeader-list list-unstyled d-flex p-0 fw-bold">
                    <li>الألكترونيات</li>
                    <li>موبيلات</li>
                    <li>رجالية</li>
                </ul>
            
        </div>
    )
}

export default BottomHeader;