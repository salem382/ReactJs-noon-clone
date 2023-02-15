import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";



const AdminIndex = () => {


    const [showPass1, setShowPass1] = useState(false);

    return (
        <section className='position-fixed w-100 h-100 top-0 start-0'
            style={{background:"rgba(0, 0, 0, 0.4)"}}
        >
            <div className="position-absolute top-50 start-50 translate-middle rounded p-4"
            style={{width:"400px", background:"#FEEE00"}}
            >
                <form>
                    <div className="my-4 position-relative">
                        <h5 className="my-3">  البريد الألكتروني</h5>
                        <input type={"text"} className='form-control'/>
                    </div>
                    <div className="my-4 position-relative">
                        <h5 className="my-3">  كلمة المرور</h5>
                        <input type={showPass1 ? "text" : "password"} className='form-control'/>
                        <FontAwesomeIcon icon={showPass1? faEye: faEyeSlash} 
                     className='position-absolute'
                     style={{bottom:"10px", left:"10px"}} role={"button"}
                     onClick={() => setShowPass1(state => !state)}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AdminIndex;