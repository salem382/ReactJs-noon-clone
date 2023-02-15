import { useDispatch, useSelector } from "react-redux";
import  {setOpenSidebar} from '../../../store/sidebarSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faHeart, faFileInvoice } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {

    const dispatch = useDispatch();

    const {openSidebar, screeSize, sidebarWidth} = useSelector(state => state.sidebar);

    return (
        <>
            <div
            className='position-fixed w-100 h-100 top-0 start-0'
            style={{display:openSidebar && screeSize < 992 ? "block" : "none",zIndex:'99',
            background : "rgba(0, 0, 0, 0.3)"}}
            onClick = {() =>dispatch(setOpenSidebar(false))}
            ></div>
            <div style={
            {right:openSidebar ? '0' :  "-300px", width:"300px", top:screeSize < 992 ?'0' :"63px",minHeight:"100vh", zIndex:'100', transition:"all .3s ease-in-out"}} 
            className='sidebar border position-absolute bg-white'>

              <ul className="list-unstyled">
                <li className="my-3 d-flex align-items-center" role={"button"}>
                    <span style={{width:"50px", height:"40px", lineHeight:"40px"}}
                     className='rounded-circle d-block text-center border'>
                        <FontAwesomeIcon className="fs-6 " icon={faQrcode} style={{color:"#FEEE00"}}/>
                    </span>
                    <span className="mx-3 fs-5" style={{color:"#999"}}>كود QR</span>
                </li>
                <li className="fs-5 my-3 d-flex align-items-center" role={"button"}>
                    <span style={{width:"50px", height:"50px", lineHeight:"50px"}}
                     className='rounded-circle border d-block text-center'>
                        <FontAwesomeIcon icon={faHeart} style={{color:"#FEEE00"}}/>
                    </span>
                    <span className="mx-3" style={{color:"#999"}}>المفضلة</span>
                </li>
                <li className=" fs-5 my-3 d-flex align-items-center" role={"button"}>
                    <span style={{width:"50px", height:"50px", lineHeight:"50px"}}
                     className='rounded-circle border d-block text-center'>
                        <FontAwesomeIcon icon={faFileInvoice} style={{color:"#FEEE00"}}/>
                    </span>
                    <span className="mx-3" style={{color:"#999"}}>الطلبيات</span>
                </li>
              </ul>

              <p style={{marginTop:"15em", color:"#999"}} className='px-5 fs-5' role={"button"}>
                    تسجيل الخروج
              </p>

            </div>
        </>
    )
}

export default Sidebar;