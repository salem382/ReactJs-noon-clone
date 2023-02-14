import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan} from '@fortawesome/free-regular-svg-icons';


const FavComponent = () => {

    return (
        <div>
           <img src="/images/products/product.avif" className="w-100" alt="product"/>
           <p style={{color:"#777"}}>هذا وصف هذا وصف هذا وصف </p>
           <h4>1450 جنية</h4>
           <div className="d-flex justify-content-between align-items-center">
                <p className="btn btn-primary">إضافة إلي العربه</p>
                <FontAwesomeIcon icon={faTrashCan} role={'button'}/>
           </div>
        </div>
    )
}

export default FavComponent;