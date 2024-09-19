
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'

type SliderProps = {
    imageUrls: string[]
}

const Slider = ({imageUrls}:SliderProps) => {
    const pagination = {
        clickable: true,
      };
    return(
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        className='w-full h-full'>
            {imageUrls.map((imageUrl,index) => (
                <SwiperSlide className='w-full h-full' key={index}><img className='w-full h-full' src={imageUrl} alt="" /></SwiperSlide>
            ))}
        </Swiper>
    )
}
export default Slider;
