import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark , faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';
import {setPopUp} from '../../../store/changeInfoSlice'
import { useDispatch } from "react-redux";



const ChangePhone = () => {

    const dispatch = useDispatch();

    return (
        <div className="position-absolute top-50 start-50 translate-middle rounded bg-white p-4"
            style={{width:"400px"}}
            onClick={(e) => e.stopPropagation()}
        >
            <div className="fs-5 d-flex justify-content-between border-bottom pb-2">
                <h4>
                        تغيير رقم الهاتف
                 </h4>
                <span>
                    <FontAwesomeIcon icon={faXmark} role="button" onClick={() => dispatch(setPopUp(false))}/>
                </span>
            </div>
            <form>
                <div className="my-4 position-relative">
                    <h5 className="mb-3">رقم الهاتف</h5>
                    <input type={'text'} className='form-control'/>
                </div>
                <div>
                    <button className="w-100 btn btn-primary">اضف معلومات الهاتف</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePhone;