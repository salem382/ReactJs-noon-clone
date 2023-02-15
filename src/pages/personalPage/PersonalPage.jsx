import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/personalComponents/sidebar/Sidebar";
import Wrapper from "../../components/personalComponents/wrapper/Wrapper";
import Content from '../../components/personalComponents/content/Content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {setOpenSidebar} from '../../store/sidebarSlice';
import { useDispatch } from "react-redux";


const PersonalPage = () => {

    const dispatch = useDispatch();
    return (
        <section>
            <Header />
            <FontAwesomeIcon onClick={() => dispatch(setOpenSidebar(true))} role={"button"} icon={faBars} className='fs-4' style={{marginTop:"15px", marginRight:"15px"}}/>
            <Sidebar />
            <Wrapper>
                <Content />
            </Wrapper>
            <Footer />
        </section>
    )
}

export default PersonalPage;