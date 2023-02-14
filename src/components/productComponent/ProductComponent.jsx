import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductComponent = () => {

    return (
        <div className='w-75'>
            <div className='position-relative w-100' style={{height:"250px"}}>
                <img src="/images/products/product.avif" alt="product"  className='position-absolute top-0 end-0 bottom-0'  style={{height:"250px"}}/>
                <FontAwesomeIcon icon={faHeart} className='position-absolute start-25 bg-white rounded-circle p-2'
                    style={{ top:"10px", zIndex:"9", boxShadow:"0 0 3px #777"}} role="button"
                />
            </div>
            <p style={{color:"#777"}}>هذا وصف هذا وصف هذا وصف هذا وصف</p>
            <p>1800 جنيه</p>
        </div>
    )
}

export default ProductComponent;