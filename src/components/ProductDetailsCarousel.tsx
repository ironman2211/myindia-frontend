import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface Image {
  id: string;
  attributes: {
    name: string;
    url: string;
  };
}

interface Props {
  images: Image[];
}
const ProductDetailsCarousel = ({ images }: Props) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px] ">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}

        className="productCarousel"
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
            className="rounded-xl outline-none"
          />
        ))}
        {/* <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" /> */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
