import { Col, Container, Row } from "react-bootstrap";


const SearchBar = () => {

    return (
        <section className="py-3 px-5" >
            <Container>
               <div className="d-flex align-items-center">
                    <p className="fw-bold fs-5 mt-3">الخدمات</p>
                    <div className=" w-50 mx-5 d-flex">
                        <input className="form-control d-block" placeholder="بحث"/>
                        <button className="btn btn-info d-block mx-5" style={{width:"200px"}}>عرض النتائج</button>
                    </div>

               </div>
            </Container>
        </section>
    )
}

export default SearchBar;