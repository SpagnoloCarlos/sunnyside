import "./Gallery.css";
import milk from "../../assets/images/pics/image-gallery-milkbottles.jpg";
import milkMobile from "../../assets/images/pics/image-gallery-milkbottles-mobile.jpg";
import orange from "../../assets/images/pics/image-gallery-orange.jpg";
import orangeMobile from "../../assets/images/pics/image-gallery-orange-mobile.jpg";
import cone from "../../assets/images/pics/image-gallery-cone.jpg";
import coneMobile from "../../assets/images/pics/image-gallery-cone-mobile.jpg";
import sugar from "../../assets/images/pics/image-gallery-sugarcubes.jpg";
import sugarMobile from "../../assets/images/pics/image-gallery-sugar-cubes-mobile.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <img className="gallery-desktop" src={milk} alt="Milk bottles" />
      <img className="gallery-mobile" src={milkMobile} alt="Milk bottles" />
      <img className="gallery-desktop" src={orange} alt="Orange" />
      <img className="gallery-mobile" src={orangeMobile} alt="Orange" />
      <img className="gallery-desktop" src={cone} alt="Cone" />
      <img className="gallery-mobile" src={coneMobile} alt="Cone" />
      <img className="gallery-desktop" src={sugar} alt="Sugar cubes" />
      <img className="gallery-mobile" src={sugarMobile} alt="Sugar cubes" />
    </section>
  );
};

export default Gallery;
