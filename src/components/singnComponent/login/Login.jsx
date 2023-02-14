import '../SignUp/signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {setOpenSign} from '../../../store/showSignSlice';



const Login = ({setOpenSignUp}) => {

    const dispatch = useDispatch();


    return (
        <form  onClick={(e) => e.stopPropagation()} className="py-3 bg-white rounded" style={{width:'400px'}}>
            
            <div className='text-start fs-4 ms-3'>
                        <FontAwesomeIcon icon={faXmark} onClick={() => dispatch(setOpenSign(false))}
                         style={{cursor:'pointer'}}/>
                     </div>
                    <h2 className="text-center fw-bold fs-4">
                        أهلاً بيك تاني 
                    </h2>
                    <h4 className='text-center'>تسجيل الدخول إلى حسابك</h4>
                    <p className="text-center haf-color"> 
                        <span>لسه معندكش حساب؟</span>
                        <span className='text-primary' style={{cursor:'pointer'}} onClick={() => setOpenSignUp(true)}>
                            اشترك الاًن 
                        </span>
                    </p>
                    <ul className="sign-list list-unstyled p-0 mt-4 px-3">
                        <li>
                            <p className="haf-color">البريد الألكتروني</p>
                            <input name='email' className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                        <li>
                            <p className="haf-color mt-4">كلمة السر</p>
                            <input  name='password' className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                    </ul>
                    <button onClick={(e) => e.preventDefault()} className="btn fw-bold w-100 text-center d-block border-top pt-3 mt-5 text-primary">انشاء حسابك</button>
           
        </form>
    )
}

export default Login;