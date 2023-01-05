import { faChevronRight, faChevronLeft, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState} from 'react';
import offersData from '../../data/offersData';
import './offers.scss';

const Slider = () => {

    const [sliderItem, setSliderItem] = useState([]);
    const [singleArrowRight, setSingleArrowRight] = useState(true);
    const [singleArrowLeft, setSingleArrowLeft] = useState(true);

    const getData = () => {
                               
        setSliderItem([...offersData])
    }
    
    useEffect(() => {
        getData();
    },[])


    return (
       
        <section className='position-relative slider'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation={{
                nextEl: ".image-swiper-button-next",
                prevEl: ".image-swiper-button-prev",
                disabledClass: "swiper-button-disabled"
            }}
            pagination={{ clickable: true }}
        >
            {sliderItem.map(item => <SwiperSlide key={item.id}>
                <img src={item.imgUrl} alt="slider-item" className='w-100 h-100'/>
            </SwiperSlide>)}
        </Swiper>
        <div style={{zIndex:'99'}} className='arrows d-lg-block w-100 position-absolute start-50 top-50 translate-middle'>
            <div onMouseEnter={() => setSingleArrowLeft(false)} onMouseLeave ={() => setSingleArrowLeft(true)}
             className='image-swiper-button-prev  position-absolute start-0'>
                <svg width="44" height="502" viewBox="0 0 44 502" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-left svg-s sc-iWajrY jVArlI">
                    <path className="wave" d="M0.999973 501C32.9999 301.5 42.9999 308 42.9999 252.5C42.9999 197 29.4999 189 1.00002 0.999996L0.999973 501Z" fill="rgba(255,255,255,.4)">

                    </path>
                </svg>
                <div className='prev-btn'>
                    <span>
                        <FontAwesomeIcon  icon={singleArrowLeft ? faChevronLeft : faAnglesLeft}/> 
                    </span>
                </div>
            </div>

            <div onMouseEnter={() => setSingleArrowRight(false)} onMouseLeave ={() => setSingleArrowRight(true)}
             className='image-swiper-button-next  position-absolute end-0'>
                <svg width="44" height="501" viewBox="0 0 44 501" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-right svg-s sc-bTMaZy jyTFVw">
                    <path className="wave"
                        d="M42.9999 0.5C11 200 1 193.5 1 249C1 304.5 14.5 312.5 42.9999 500.5V0.5Z" 
                        fill="rgba(255,255,255,.4)">  
                    </path>
                </svg>
                <div className='next-btn'>
                    <span>
                        <FontAwesomeIcon  icon={singleArrowRight ? faChevronRight : faAnglesRight}/> 
                    </span>
                </div>
            </div>
            
        </div>
        </section>    
       
    )
}

export default Slider;

