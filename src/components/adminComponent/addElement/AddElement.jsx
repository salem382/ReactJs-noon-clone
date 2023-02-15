import { Container } from "react-bootstrap";
import { useState } from "react";

const AddElement = () => {


    const [fileUrl, setFileUrl] = useState('/images/admin/product-default.png');


    const postDataForFile = async (e) => {

        setFileUrl(URL.createObjectURL(e.target.files[0]));
    
      };

    return (
        <section>
            <h3 className="px-5 mt-4">إضافة عنصر</h3>
            <Container>
                <div className="d-flex w-100">
                    <div className="mx-2" >
                        <h5 className="my-3" style={{fontSize:"14px", fontWeight:"bold"}}> الأسم</h5>
                        <input type={"text"} className='form-control'/>
                    </div>
                    <div className="mx-2">
                        <h5 className="my-3" style={{fontSize:"14px", fontWeight:"bold"}}> السعر</h5>
                        <input type={"number"} className='form-control'/>
                    </div>
                    <div className="mx-2">
                        <h5 className="my-3" style={{fontSize:"14px", fontWeight:"bold"}}> الفئه</h5>
                        <select className="inputBtn" name="section" id="section" required
                            style={{border:"1px solid #dee2e6", width:"200px"}}
                        >
                            <option value="" disabled selected hidden>
                                الفئه
                            </option>
                            <option value="Sciences">الألكترونيات</option>
                            <option value="Humanities">الموبيلات</option>
                            <option value="Humanities">رجالية</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="mx-2">
                        <h5 className="my-3" style={{fontSize:"14px", fontWeight:"bold"}}> الوصف</h5>
                        <textarea style={{border:"1px solid #dee2e6", outline:"none", height:"150px"}}>
                        </textarea>
                    </div>
                    <div style={{width:"150px"}} className='mx-4 position-relative'>
                        <h5 className="my-3" style={{fontSize:"14px", fontWeight:"bold"}}>إضافة صورة</h5>
                        <img  src={fileUrl} alt='default-img' className="start-0 position-absolute w-100" style={{height:"150px", top:"50px", zIndex:"1"}}/>
                        <input 
                        onChange={(e) => postDataForFile(e)}
                         type={"file"}
                         className='border w-100 position-absolute opacity-0' 
                         style={{height:"150px", top:"50px", zIndex:"2"}}
                         accept='image/png, image/jpeg'
                         />
                    </div>
                </div>
                <button className="btn btn-info px-5 mt-4 py-2"> إضافة</button>
            </Container>
        </section>
    )

}

export default AddElement;