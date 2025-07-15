

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import s1 from '../../assets/projects/s1.jpg';
import s2 from '../../assets/projects/s2.jpg';
import s3 from '../../assets/projects/s3.jpg';
import s4 from '../../assets/projects/s4.jpg';
import SectionTitle from "../common/SectionTitle"
const images = [
    s1, s2, s3, s4

]

const ProjectsSlide = () => {
    return (
        <div className="w-full  mx-auto p-10">
            <SectionTitle title={`My Works`}/>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {images.map((src, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            src={src}
                            alt={`Slide ${idx + 1}`}
                            className="w-full h-[400px] object-center bg-cover rounded-xl shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProjectsSlide
