import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Bottom.scss';
import { useLocation } from 'react-router-dom';


const BottomHeader = () => {

    const location = useLocation();

    return (
        <div className='align-items-start' style={{display:location.pathname === `/personal` ? 'none' : 'flex'}}>
            
                <div className="all pt-2 w-25 position-relative">
                    <div className='d-flex fw-bold align-items-center  justify-content-around text-primary'>
                        <span>جميع الفئات</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className='all-list bg-white position-absolute px-2 px-md-5 py-2 pt-4 border-start'
                     style={{height:'150px', zIndex:999}}>
                        <p>الألكترونيات</p>
                        <p>موبيلات</p>
                        <p>رجالية</p>
                    </div>
                </div>


                <ul className="bottomHeader-list m-0 list-unstyled d-flex p-0 fw-bold">
                    <li>الألكترونيات</li>
                    <li>موبيلات</li>
                    <li>رجالية</li>
                </ul>
            
        </div>
    )
}

export default BottomHeader;