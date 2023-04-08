import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Bottom.scss';
import { useLocation } from 'react-router-dom';


const BottomHeader = () => {

    const location = useLocation();

    return (
        <div className='align-items-start' style={{display:location.pathname === `/personal` ? 'none' : 'flex'}}>
                <div className="all pt-2 w-25 position-relative d-none d-md-block">
                    <div className='d-flex fw-bold align-items-center justify-content-around text-primary'>
                        <span>ALL CATEGORIES</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                    <div className='all-list position-absolute px-2 px-md-5 py-2 pt-4 border-start bg-white'
                     style={{zIndex:999, width:"150%"}}>
                        <div className='d-flex justify-content-between'>
                                <div style={{width:"14px", width:"35%"}}>
                                    <h6>category</h6>
                                    <span>ELECTORNICS</span>
                                    <span>MOBILES</span>
                                    <span>MEN</span>
                                    <span>ELECTORNICS</span>
                                    <span>MOBILES</span>
                                    <span>MEN</span>
                                    <span>ELECTORNICS</span>
                                    <span>MOBILES</span>
                                    <span>MEN</span>
                                    <span>ELECTORNICS</span>
                                    <span>MOBILES</span>
                                    <span>MEN</span>
                                </div>
                                <div style={{width:"65%"}}>
                                <p className='text-center'>active category</p>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6>sub category</h6>
                                        <span>MEN</span>
                                        <span>ELECTORNICS</span>
                                        <span>MOBILES</span>
                                        <span>MEN</span>
                                        <span>ELECTORNICS</span>
                                        <span>MOBILES</span>
                                        <span>MEN</span>
                                    </div>
                                    <div>
                                        <h6>brands</h6>
                                        <span>MEN</span>
                                        <span>ELECTORNICS</span>
                                        <span>MOBILES</span>
                                        <span>MEN</span>
                                        <span>ELECTORNICS</span>
                                        <span>MOBILES</span>
                                        <span>MEN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="bottomHeader-list m-0 list-unstyled d-flex p-0 fw-bold">
                    <li>ELECTORNICS</li>
                    <li>MOBILES</li>
                    <li>MEN</li>
                </ul>
            
        </div>
    )
}

export default BottomHeader;