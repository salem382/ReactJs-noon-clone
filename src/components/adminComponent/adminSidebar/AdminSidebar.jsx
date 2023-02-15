import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPhone, faPerson, faHouse} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import './adminSidebar.scss';

const Sidebar = () => {

    return (
        <div style={{width:"220px", background:"#feee007d", minHeight:"100vh"}} className='p-3'>
           <div>
                <img style={{width:"100px"}} src="/images/logo.svg" alt="logo"/>
           </div>
           <ul className="list-unstyled p-0" style={{marginTop:"5em"}}>
                <li className="my-4 " role={"button"} style={{color:"#777"}}>
                    <NavLink to={'/admin/main'}
                    className={({ isActive }) =>
                     isActive ? "active-item py-2 px-2 rounded" : "unactive-item py-2 px-2 rounded"
                    }
                    >
                        <span>
                            <FontAwesomeIcon icon={faHouse}/>
                        </span>
                        <span className="mx-2">
                        الصفحة الرئبسبة
                        </span>
                    </NavLink>
                </li>
                <li className="my-4  py-2 px-2 rounded" role={"button"} style={{color:"#777"}}>
                    <NavLink to={'/admin/electronic'}
                        className={({ isActive }) =>
                        isActive ? "active-item py-2 px-2 rounded" : "unactive-item py-2 px-2 rounded"
                        }
                        >
                        <span>
                            <FontAwesomeIcon icon={faBolt}/>
                        </span>
                        <span className="mx-2">
                            الألكترونيات
                        </span>
                    </NavLink>
                </li>
                <li className="my-4  py-2 px-2 rounded" role={"button"} style={{color:"#777"}}>
                    <NavLink to={'/admin/phones'}
                            className={({ isActive }) =>
                            isActive ? "active-item py-2 px-2 rounded" : "unactive-item py-2 px-2 rounded"
                            }
                            >
                    <span>
                        <FontAwesomeIcon icon={faPhone}/>
                    </span>
                    <span className="mx-2">
                        الموبيلات
                    </span>
                    </NavLink>
                </li>
                <li className="my-4 " role={"button"} >
                    <NavLink to={'/admin/mens'}
                            className={({ isActive }) =>
                            isActive ? "active-item py-2 px-2 rounded" : "unactive-item py-2 px-2 rounded"
                            }
                            >
                        <span>
                            <FontAwesomeIcon icon={faPerson}/>
                        </span>
                        <span className="mx-2">
                            رجالية
                        </span>
                    </NavLink>
                </li>
           </ul>
        </div>
    )
}

export default Sidebar;