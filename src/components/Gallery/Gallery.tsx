import "./Gallery.css";
import milk from "../../assets/images/pics/image-gallery-milkbottles.jpg";
import orange from "../../assets/images/pics/image-gallery-orange.jpg";
import cone from "../../assets/images/pics/image-gallery-cone.jpg";
import sugar from "../../assets/images/pics/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={milk} alt="Milk bottles" />
      <img src={orange} alt="Orange" />
      <img src={cone} alt="Cone" />
      <img src={sugar} alt="Sugar cubes" />
    </section>
  );
};

export default Gallery;
