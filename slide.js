
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  "./Slide.css";

const Slide = () => {
  
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4// optional, default to 1.
  },
  
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3// optional, default to 1.
  },
   tablet1: {
    breakpoint: { max: 600, min: 464 },
    items: 2,
    slidesToSlide: 2// optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  
    return (
     
      <Carousel swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  
  >
   
  <div className="sl1"></div>
  <div className="sl2"></div>
  <div className="sl3"></div>
  <div className="sl4"></div>
 
</Carousel>

      );
}
 
export default Slide;