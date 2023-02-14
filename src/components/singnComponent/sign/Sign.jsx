import SignUp from '../SignUp/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import {setOpenSign} from '../../../store/showSignSlice';
import { useState } from 'react';
import Login from '../login/Login';

const Sign = () => {

    const dispatch = useDispatch();
    const {openSign} = useSelector(state => state.sign);
    const [openSignUp, setOpenSignUp] = useState(true);

    return (
       <section className="position-fixed w-100 h-100 
        top-0 bottom-0 start-0 end-0" onClick={()=>dispatch(setOpenSign(false))}
        style={{background:'rgba(0, 0, 0, 0.4)',
        display:openSign ? 'block' : 'none', zIndex:'999'}}>
            <div className="w-100 h-100 d-flex justify-content-center
                align-items-center">
                {openSignUp ? <SignUp setOpenSignUp = {setOpenSignUp}/> : <Login setOpenSignUp = {setOpenSignUp} />}    
            </div>
            
       </section>
    )
}

export default Sign;