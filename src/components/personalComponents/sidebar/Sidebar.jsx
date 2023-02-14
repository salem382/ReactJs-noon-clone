import { useDispatch, useSelector } from "react-redux";
import  {setOpenSidebar} from '../../../store/sidebarSlice';

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
            {right:openSidebar ? '0' :  "-300px", width:"300px", top:"63px",minHeight:"80vh"}} 
            className='sidebar border position-absolute bg-white'>

                this is side bar

            </div>
        </>
    )
}

export default Sidebar;