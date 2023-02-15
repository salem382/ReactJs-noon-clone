import { useDispatch, useSelector } from "react-redux";
import {setPopUp} from '../../../store/changeInfoSlice'
import ChangePass from "../chanfePassword/ChangePass";
import ChangePhone from "../changePhone/ChangePhone";

const ChangeInfo = () => {

    const dispatch = useDispatch();
    const {openPopUp} = useSelector(state => state.popUp);
    const {showPassword} = useSelector(state => state.popUp);

    return (
        <div className="w-100 h-100 position-fixed top-0 start-0" 
            style={{background:"rgba(0, 0, 0, .4)", zIndex:"101", display:openPopUp ? 'block' : 'none'}}
            onClick = {() => dispatch(setPopUp(false))}
        >
          {showPassword ? <ChangePass /> : <ChangePhone />}  
        </div>
    )
}

export default ChangeInfo;