

const Wrapper = () => {

    return (
        <div style={{background:"#F3F4F8"}} className='p-5'>
            <h3>حسابك</h3>
            <p>قم بإدارة تفاصيلك، وعرض حالتك، وتغيير كلمة المرور الخاصة بك</p>
            <div className="m-auto bg-white p-3 rounded" style={{width:"95%"}}>
                <h4>معلومات عامة</h4>
                <div className="d-flex justify-content-around">
                    <div className="">
                        <p>الأسم الأول </p>
                        <input type={"text"} placeholder="Ahmed" className="form-control"/>
                    </div>
                    <div>
                        <p>أسم العائلة </p>
                        <input type={"text"} placeholder="salem"  className="form-control"/>
                    </div>
                </div>
                <div style={{marginRight:"130px"}}>
                    <p className="btn btn-primary mt-4">تحديث البينات</p>
                </div>
            </div>
            <div className="m-auto bg-white p-3 rounded mt-5" style={{width:"95%"}}>
                <h4>الحماية</h4>
                <div className="d-flex justify-content-around">
                    <div className="">
                        <p> البريد الألكتروني </p>
                        <input type={"text"} placeholder="ahmed@gmail.com" className="form-control"/>
                    </div>
                    <div>
                        <p> كلمة السر </p>
                        <input type={"password"} placeholder="********"  className="form-control"/>
                    </div>
                    <div>
                        <p>  رقم الجوال </p>
                        <input type={"text"} placeholder="+2011443871233"  className="form-control"/>
                    </div>
                </div>
                <div style={{marginRight:""}} className='d-flex mt-3'>
                    <p className=" border py-2 px-4 rounded mx-4" role={"button"}> تغيير كلمة السر</p>
                    <p className="border py-2 px-4 rounded mx-4"  role={"button"}>  أضف معلومات الهاتف</p>
                </div>
            </div>
        </div>
    )
}

export default Wrapper;