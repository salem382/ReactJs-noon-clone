import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/personalComponents/sidebar/Sidebar";
import Wrapper from "../../components/personalComponents/wrapper/Wrapper";
import Content from '../../components/personalComponents/content/Content'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


const PersonalPage = () => {

    return (
        <section>
            <Header />
            <FontAwesomeIcon icon={faBars} className='fs-4' style={{marginTop:"15px", marginRight:"15px"}}/>
            <Sidebar />
            <Wrapper>
                <Content />
            </Wrapper>
            <Footer />
        </section>
    )
}

export default PersonalPage;