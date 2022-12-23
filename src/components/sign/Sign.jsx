
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './sign.scss';

const Sign = ({openSign, setOpenSignFun}) => {



    return (
       <section onClick={() =>setOpenSignFun(false)} className="position-fixed w-100 h-100
        top-0 bottom-0 start-0 end-0"
        style={{background:'rgba(0, 0, 0, 0.4)',
        display:openSign ? 'block' : 'none'}}>
            <div className="w-100 h-100 d-flex justify-content-center
                align-items-center">
                <div onClick={(e) => e.stopPropagation()} className="py-3 bg-white rounded" style={{width:'400px'}}>
                    
                    <div className='text-start fs-4 ms-3'>
                        <FontAwesomeIcon icon={faXmark}  onClick={() =>setOpenSignFun(false)}
                         style={{cursor:'pointer'}}/>
                    </div>
                    <h2 className="text-center fw-bold fs-4">انشاء حسابك</h2>
                    <p className="text-center haf-color">هل لديك حساب بالفعل ؟ </p>
                    <ul className="sign-list list-unstyled p-0 mt-4 px-3">
                        <li>
                            <p className="haf-color">البريد الألكتروني</p>
                            <input className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                        <li>
                            <p className="haf-color mt-4">كلمة السر</p>
                            <input className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                        <li>
                            <p className="haf-color mt-4">الأسم الأول</p>
                            <input className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                        <li>
                            <p className="haf-color mt-4">أسم العائلة</p>
                            <input className="border-0 border-bottom w-100" type={'text'}/>
                        </li>
                    </ul>
                    <button className="btn fw-bold w-100 text-center d-block border-top pt-3 mt-5 text-primary">انشاء حسابك</button>
                </div>
            </div>
            
       </section>
    )
}

export default Sign;