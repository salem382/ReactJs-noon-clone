
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './sign.scss';
import Joi, { func } from 'joi';
import { useState } from 'react';
import Spiner from '../spiner/Spiner';
import { useRef } from 'react';

const Sign = ({openSign, setOpenSignFun}) => {

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const [signUp, setSignUp] = useState(true);
    const [errArr, setErrArr] = useState([]);
    const [isPost, setIsPost] = useState (false);
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [userDataSignin, setUserDataSignin] = useState({
        email: "",
        password: ""
    });

    const clearData = () => {

        firstNameInput.current.value = "";
        lastNameInput.current.value = "";
    }
    const postData = (e) => {
        if (signUp) {
            let usr = {...userData};
            usr[e.target.name] = e.target.value;
            setUserData({...usr})
        } else {

            let usr = {...userDataSignin};
            usr[e.target.name] = e.target.value;
            setUserDataSignin({...usr})
        }
    }

    const postToUrl = async (url, obj) => {
        setErrArr([]);
        setIsPost(true);
        const {data} = await axios.post(url, obj);
        setMsg(data.message);
        data.message === "User has been created, Please signin" && setSignUp(false);
        setIsPost(false) && clearData();
        setMsg("");
    }
    const submitData = (e) => {
        e.preventDefault();
        if (signUp) {

            if (userValidationSignUp().error) {
                let errs = userValidationSignUp().error.details.map(item =>item.message)
                setErrArr([...errs])
            } 
            else {
                postToUrl('https://noon-clone.onrender.com/api/v1/users', userData);
            }
        }
        else {
            console.log ('done')
            if (userValidationSignIn().error) {
                console.log ('done000')
                let errs = userValidationSignIn().error.details.map(item =>item.message)
                console.log(errs);
                setErrArr([...errs])
            } 
            else {
                postToUrl('https://noon-clone.onrender.com/api/v1/users/signin', userDataSignin);
            }
            console.log ('done2')
        }
    }
    
    const userValidationSignUp = () => {
        const schema = Joi.object({
            firstName:Joi.string().alphanum().min(3).max(10).required(),
            lastName:Joi.string().alphanum().min(3).max(10).required(),
            email:Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().min(7).max(20).required()
        })
        return schema.validate(userData,{abortEarly:false});
    }
    const userValidationSignIn = () => {
        const schema = Joi.object({
            email:Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password:Joi.string().min(7).max(20).required()
        })
        return schema.validate(userData,{abortEarly:false});
    }


    return (
       <section onClick={() =>setOpenSignFun(false)} className="position-fixed w-100 h-100
        top-0 bottom-0 start-0 end-0"
        style={{background:'rgba(0, 0, 0, 0.4)',
        display:openSign ? 'block' : 'none', zIndex:'999'}}>
            <div className="w-100 h-100 d-flex justify-content-center
                align-items-center">
                <form onSubmit={(e) =>submitData(e)} onClick={(e) => e.stopPropagation()} className="py-3 bg-white rounded" style={{width:'400px'}}>
                    
                    <div className='text-start fs-4 ms-3'>
                        <FontAwesomeIcon icon={faXmark}  onClick={() =>setOpenSignFun(false)}
                         style={{cursor:'pointer'}}/>
                    </div>
                    <h2 className="text-center fw-bold fs-4">
                     {signUp? ' انشاء حسابك' :
                     (<>
                        <p className='fw-normal fs-5'>اهلا بيك تاني</p>
                        تسجيل الدخول الي حسابك
                     </>)
                     }  
                    </h2>
                    <p className="text-center haf-color"> 
                    {!signUp ? 'لسه معندكشي حساب ؟' : 'هل لديك حساب بالفعل ؟ '}
                    <span className='text-primary' style={{cursor:'pointer'}} onClick={() => setSignUp((prev) => !prev)}>
                         {!signUp ? 'اشترك الأن' : 'تسجيل الدخول'}
                    </span>
                    </p>
                    <ul className="sign-list list-unstyled p-0 mt-4 px-3">
                        <li>
                            <p className="haf-color">البريد الألكتروني</p>
                            <input ref={firstNameInput} onChange={(e) => postData(e)} name='email' className="border-0 border-bottom w-100" type={'text'}/>
                            <p className='text-danger mt-2'>{errArr.filter(item => item.includes('email'))}</p>
                        </li>
                        <li>
                            <p className="haf-color mt-4">كلمة السر</p>
                            <input ref={lastNameInput} onChange={(e) => postData(e)} name='password' className="border-0 border-bottom w-100" type={'text'}/>
                            <p className='text-danger mt-2'>{errArr.filter(item => item.includes('password'))}</p>
                        </li>
                        {signUp ? (
                            <>
                                <li>
                                <p className="haf-color mt-4">الأسم الأول</p>
                                <input onChange={(e) => postData(e)} className="border-0 border-bottom w-100" name='firstName' type={'text'}/>
                                <p className='text-danger mt-2'>{errArr.filter(item => item.includes('firstName'))}</p>
                                </li>
                                <li>
                                    <p className="haf-color mt-4">أسم العائلة</p>
                                    <input onChange={(e) => postData(e)} name='lastName' className="border-0 border-bottom w-100" type={'text'}/>
                                    <p className='text-danger mt-2'>{errArr.filter(item => item.includes('lastName'))}</p>
                                </li>
                            </>
                        ) : <></>}
                    </ul>
                        {isPost ? <Spiner/> : (
                            <p 
                                className={msg === "success" ? 'text-success fw-bold text-center' : 'text-dange fw-bold text-center'}>
                                {msg}
                            </p>
                        )}
                    <button className="btn fw-bold w-100 text-center d-block border-top pt-3 mt-5 text-primary"> {signUp ? 'انشاء حسابك' : 'تسجيل الدخول'}</button>
                </form>
            </div>
            
       </section>
    )
}

export default Sign;