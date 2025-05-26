import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const imagens = [
  "fachada.jpg",
  "escritorio duplo.jpg",
  "escritorio duplo2.jpg",
  "escritorio duplo3.jpg",
  "IMG-20250521-WA0047.jpg",
  "IMG-20250521-WA0048.jpg",
  "IMG-20250521-WA0049.jpg",
  "IMG-20250521-WA0050.jpg",
  "IMG-20250521-WA0051.jpg",
  "IMG-20250521-WA0052.jpg",
  "IMG-20250521-WA0053.jpg",
  "IMG-20250521-WA0054.jpg",
  "IMG-20250521-WA0055.jpg",
  "IMG-20250521-WA0056.jpg",
  "IMG-20250521-WA0057.jpg",
  "IMG-20250521-WA0058.jpg",
  "IMG-20250521-WA0059.jpg",

  "IMG-20250521-WA0061.jpg",
  "IMG-20250521-WA0062.jpg",
  "IMG-20250521-WA0063.jpg",
  "IMG-20250521-WA0064.jpg",
  "IMG-20250521-WA0065.jpg",
  "IMG-20250521-WA0066.jpg",
  "IMG-20250521-WA0067.jpg",
  "IMG-20250521-WA0068.jpg",
  "IMG-20250521-WA0069.jpg",
  "IMG-20250521-WA0070.jpg",
  "IMG-20250521-WA0071.jpg",
  "IMG-20250521-WA0072.jpg",
  "IMG-20250521-WA0073.jpg",
  "IMG-20250521-WA0074.jpg",
  "IMG-20250521-WA0075.jpg",
  "IMG-20250521-WA0076.jpg",
  "IMG-20250521-WA0077.jpg",
  "IMG-20250521-WA0078.jpg",
  "IMG-20250521-WA0079.jpg",
  "IMG-20250521-WA0080.jpg",
  "IMG-20250521-WA0082.jpg",
  "IMG-20250521-WA0083.jpg",
  "IMG-20250521-WA0084.jpg",
  "IMG-20250521-WA0085.jpg",
  "IMG-20250521-WA0086.jpg",
  "IMG-20250521-WA0087.jpg",
  "IMG-20250521-WA0088.jpg",
  "IMG-20250521-WA0089.jpg",
  "IMG-20250521-WA0090.jpg",
  "IMG-20250521-WA0091.jpg",
  "IMG-20250521-WA0092.jpg",
  "IMG-20250521-WA0093.jpg",
  "IMG-20250521-WA0094.jpg",
  "IMG-20250521-WA0095.jpg",
  "IMG-20250521-WA0096.jpg",
  "IMG-20250521-WA0097.jpg",
  "IMG-20250521-WA0098.jpg",
  "IMG-20250521-WA0099.jpg",
  "IMG-20250521-WA0100.jpg",
  "IMG-20250521-WA0101.jpg",
  "IMG-20250521-WA0102.jpg",
  "IMG-20250521-WA0103.jpg",
  "IMG-20250521-WA0104.jpg",
  "IMG-20250521-WA0105.jpg",
  "IMG-20250521-WA0106.jpg",
  "IMG-20250521-WA0107.jpg",
  "IMG-20250521-WA0108.jpg",
  "IMG-20250521-WA0109.jpg",
  "IMG-20250521-WA0110.jpg",

];

const PhotoCarousel = () => (
  <div className="photo-carousel-container">
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
    >
      {imagens.map((img, i) => (
        <SwiperSlide key={i}>
          <img
            src={`/imagens/${img}`}
            alt={`Imagem ${i + 1}`}
            className="photo-carousel-img"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default PhotoCarousel;