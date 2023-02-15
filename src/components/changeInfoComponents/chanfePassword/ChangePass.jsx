import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {setPopUp} from '../../../store/changeInfoSlice'
import { useDispatch } from "react-redux";
import { useState } from "react";


const ChangePass = () => {

    const dispatch = useDispatch();
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [showPass3, setShowPass3] = useState(false);

    return (
        <div className="position-absolute top-50 start-50 translate-middle rounded bg-white p-4"
            style={{width:"400px"}}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="fs-5 d-flex justify-content-between border-bottom pb-2">
                <h4>
                        تغيير كلمة المرور
                 </h4>
                <span>
                    <FontAwesomeIcon icon={faXmark} role="button" onClick={() => dispatch(setPopUp(false))}/>
                </span>
            </div>
            <form>
                <div className="my-4 position-relative">
                    <h5>كلمة المرر الحالية</h5>
                    <input type={showPass1 ? 'text' :'password'} className='form-control'/>
                    <FontAwesomeIcon icon={showPass1? faEye: faEyeSlash} 
                     className='position-absolute'
                     style={{bottom:"10px", left:"10px"}} role={"button"}
                     onClick={() => setShowPass1(state => !state)}/>
                </div>
                <div className="my-4 position-relative">
                    <h5>كلمة المرر الجديده</h5>
                    <input type={showPass2 ? 'text' :'password'} className='form-control'/>
                    <FontAwesomeIcon icon={showPass2? faEye: faEyeSlash} 
                     className='position-absolute'
                     style={{bottom:"10px", left:"10px"}} role={"button"}
                     onClick={() => setShowPass2(state => !state)}/>
                </div>
                <div className="my-4 position-relative">
                    <h5>كرر كلمة المرور الجديده</h5>
                    <input type={showPass3 ? 'text' :'password'} className='form-control'/>
                    <FontAwesomeIcon icon={showPass3? faEye: faEyeSlash} 
                     className='position-absolute'
                     style={{bottom:"10px", left:"10px"}} role={"button"}
                     onClick={() => setShowPass3(state => !state)}/>
                </div>
            </form>
        </div>
    )
}

export default ChangePass;