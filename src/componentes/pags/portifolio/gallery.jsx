import LightGallery from 'lightgallery/react';
import './style.css';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
    { src: "/imagens/fachada.jpg", alt: "Fachada" },
    { src: "/imagens/escritorio duplo.jpg", alt: "Escritorio Duplo" },
    { src: "/imagens/escritorio duplo2.jpg", alt: "Escritorio Duplo 2" },
    { src: "/imagens/escritorio duplo3.jpg", alt: "Escritorio Duplo 3" },
    { src: "/imagens/IMG-20250521-WA0047.jpg", alt: "Image 0047" },
    { src: "/imagens/IMG-20250521-WA0048.jpg", alt: "Image 0048" },
    { src: "/imagens/IMG-20250521-WA0049.jpg", alt: "Image 0049" },
    { src: "/imagens/IMG-20250521-WA0050.jpg", alt: "Image 0050" },
    { src: "/imagens/IMG-20250521-WA0051.jpg", alt: "Image 0051" },
    { src: "/imagens/IMG-20250521-WA0052.jpg", alt: "Image 0052" },
    { src: "/imagens/IMG-20250521-WA0053.jpg", alt: "Image 0053" },
    { src: "/imagens/IMG-20250521-WA0054.jpg", alt: "Image 0054" },
    { src: "/imagens/IMG-20250521-WA0055.jpg", alt: "Image 0055" },
    { src: "/imagens/IMG-20250521-WA0056.jpg", alt: "Image 0056" },
    { src: "/imagens/IMG-20250521-WA0057.jpg", alt: "Image 0057" },
    { src: "/imagens/IMG-20250521-WA0058.jpg", alt: "Image 0058" },
    { src: "/imagens/IMG-20250521-WA0059.jpg", alt: "Image 0059" },
    { src: "/imagens/IMG-20250521-WA0061.jpg", alt: "Image 0061" },
    { src: "/imagens/IMG-20250521-WA0062.jpg", alt: "Image 0062" },
    { src: "/imagens/IMG-20250521-WA0063.jpg", alt: "Image 0063" },
    { src: "/imagens/IMG-20250521-WA0064.jpg", alt: "Image 0064" },
    { src: "/imagens/IMG-20250521-WA0065.jpg", alt: "Image 0065" },
    { src: "/imagens/IMG-20250521-WA0066.jpg", alt: "Image 0066" },
    { src: "/imagens/IMG-20250521-WA0067.jpg", alt: "Image 0067" },
    { src: "/imagens/IMG-20250521-WA0068.jpg", alt: "Image 0068" },
    { src: "/imagens/IMG-20250521-WA0069.jpg", alt: "Image 0069" },
    { src: "/imagens/IMG-20250521-WA0070.jpg", alt: "Image 0070" },
    { src: "/imagens/IMG-20250521-WA0071.jpg", alt: "Image 0071" },
    { src: "/imagens/IMG-20250521-WA0072.jpg", alt: "Image 0072" },
    { src: "/imagens/IMG-20250521-WA0073.jpg", alt: "Image 0073" },
    { src: "/imagens/IMG-20250521-WA0074.jpg", alt: "Image 0074" },
    { src: "/imagens/IMG-20250521-WA0075.jpg", alt: "Image 0075" },
    { src: "/imagens/IMG-20250521-WA0076.jpg", alt: "Image 0076" },
    { src: "/imagens/IMG-20250521-WA0077.jpg", alt: "Image 0077" },
    { src: "/imagens/IMG-20250521-WA0078.jpg", alt: "Image 0078" },
    { src: "/imagens/IMG-20250521-WA0079.jpg", alt: "Image 0079" },
    { src: "/imagens/IMG-20250521-WA0080.jpg", alt: "Image 0080" },
    { src: "/imagens/IMG-20250521-WA0082.jpg", alt: "Image 0082" },
    { src: "/imagens/IMG-20250521-WA0083.jpg", alt: "Image 0083" },
    { src: "/imagens/IMG-20250521-WA0084.jpg", alt: "Image 0084" },
    { src: "/imagens/IMG-20250521-WA0085.jpg", alt: "Image 0085" },
    { src: "/imagens/IMG-20250521-WA0086.jpg", alt: "Image 0086" },
    { src: "/imagens/IMG-20250521-WA0087.jpg", alt: "Image 0087" },
    { src: "/imagens/IMG-20250521-WA0088.jpg", alt: "Image 0088" },
    { src: "/imagens/IMG-20250521-WA0089.jpg", alt: "Image 0089" },
    { src: "/imagens/IMG-20250521-WA0090.jpg", alt: "Image 0090" },
    { src: "/imagens/IMG-20250521-WA0091.jpg", alt: "Image 0091" },
    { src: "/imagens/IMG-20250521-WA0092.jpg", alt: "Image 0092" },
    { src: "/imagens/IMG-20250521-WA0093.jpg", alt: "Image 0093" },
    { src: "/imagens/IMG-20250521-WA0094.jpg", alt: "Image 0094" },
    { src: "/imagens/IMG-20250521-WA0095.jpg", alt: "Image 0095" },
    { src: "/imagens/IMG-20250521-WA0096.jpg", alt: "Image 0096" },
    { src: "/imagens/IMG-20250521-WA0097.jpg", alt: "Image 0097" },
    { src: "/imagens/IMG-20250521-WA0098.jpg", alt: "Image 0098" },
    { src: "/imagens/IMG-20250521-WA0099.jpg", alt: "Image 0099" },
    { src: "/imagens/IMG-20250521-WA0100.jpg", alt: "Image 0100" },
    { src: "/imagens/IMG-20250521-WA0101.jpg", alt: "Image 0101" },
    { src: "/imagens/IMG-20250521-WA0102.jpg", alt: "Image 0102" },
    { src: "/imagens/IMG-20250521-WA0103.jpg", alt: "Image 0103" },
    { src: "/imagens/IMG-20250521-WA0104.jpg", alt: "Image 0104" },
    { src: "/imagens/IMG-20250521-WA0105.jpg", alt: "Image 0105" },
    { src: "/imagens/IMG-20250521-WA0106.jpg", alt: "Image 0106" },
    { src: "/imagens/IMG-20250521-WA0107.jpg", alt: "Image 0107" },
    { src: "/imagens/IMG-20250521-WA0108.jpg", alt: "Image 0108" },
    { src: "/imagens/IMG-20250521-WA0109.jpg", alt: "Image 0109" },
    { src: "/imagens/IMG-20250521-WA0110.jpg", alt: "Image 0110" },
];

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}