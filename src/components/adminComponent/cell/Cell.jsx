import { useState } from "react";
import { Container } from "react-bootstrap";


const Cell = () => {


    const [isUpdate, setIsUpdate] = useState(false);

    const [fileUrl, setFileUrl] = useState('/images/products/product.avif');


    const postDataForFile = async (e) => {

        setFileUrl(URL.createObjectURL(e.target.files[0]));
    
      };

    return (
        <Container> 
            <div className="d-flex justify-content-between align-items-center">
                
                {isUpdate ? (
                    <div>
                        <div style={{width:"80px", top:"-50px", left:"25px"}} className='mx-4 position-relative'>
                            <img  src={fileUrl} alt='default-img' className="start-0 position-absolute top-0 w-100" style={{height:"120px", zIndex:"1"}}/>
                            <input 
                            onChange={(e) => postDataForFile(e)}
                            type={"file"}
                            className='w-100 top-0  position-absolute opacity-0' 
                            style={{height:"150px", zIndex:"2"}}
                            accept='image/png, image/jpeg'
                            />
                        </div>
                    </div>
                ) :<img style={{width:"80px", height:"120px"}} src={fileUrl}  alt="default img"/>}
                {isUpdate ? <input defaultValue={'هاتف محمول'} type='text' /> : <p>هاتف محمول</p>}
                {isUpdate ? <input defaultValue={'6000'} type='number' /> : <p>6000 جنية</p>}
                {isUpdate ? <textarea defaultValue={'هذا وصف هذا وصف هذا وصف'}  ></textarea> :  <p> هذا وصف هذا وصف هذا وصف</p>}
                <p><button class="btn btn-danger">حذف</button></p>
                <p><button class="btn btn-primary" onClick={() => setIsUpdate(state => !state)}>{isUpdate ? "حفظ" : "تعديل"}</button></p>
            </div> 
        </Container>
    )
}

export default Cell;