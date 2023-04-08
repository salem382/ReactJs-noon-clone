import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";
import './homeslides.scss';
import ProductComponent from '../productComponent/ProductComponent';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from 'react-bootstrap';



const HomeSlides = ({next, prev}) => {

    return (
        <Container fluid>
        <section className='position-relative'>
        <h5 className="mt-5 me-4 mb-3" >Head</h5>
        <div className="item-slide mt-2 swiper-container">
              <Swiper
            breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                    slidesPerView: 6,
                }
              }}
            modules={[Navigation]}
            navigation={{
                nextEl:`.${next}`,
                prevEl:`.${prev}`,
                disabledClass: "swiper-button-disabled"
                
            }}
            loop={true}
            className="mySwiper siper02">
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductComponent/>
                </SwiperSlide>
            </Swiper>

        <div style={{zIndex:'99'}} className='arrows d-lg-block position-absolute w-100 top-50 translate-middle-y'>
            <div
            className={'position-absolute rounded-circle bg-white swiper-button-prev ' + prev}
                style={{width:"30px", height:"30px", boxShadow:"0 0 3px #777", color:"#777"}}
            >
                <FontAwesomeIcon  icon={faChevronLeft} className='fs-5'/> 
            </div>

            <div 
            className={'position-absolute border  rounded-circle bg-white swiper-button-next ' + next}
            style={{width:"30px", height:"30px", boxShadow:"0 0 3px #777", color:"#777"}}>
                <FontAwesomeIcon  icon={faChevronRight} className='fs-5'/> 
            </div>
        </div>
        
        </div>
        </section>
        </Container>
    )
}

export default HomeSlides;

