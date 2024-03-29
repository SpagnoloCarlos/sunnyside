import CardTestimonial from "../CardTestimonial/CardTestimonial";
import "./Testimonials.css";
import emily from "../../assets/images/pics/image-emily.jpg";
import thomas from "../../assets/images/pics/image-thomas.jpg";
import jennie from "../../assets/images/pics/image-jennie.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Client testimonials</h2>
      <div className="testimonials-card-container">
        <CardTestimonial
          image={emily}
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          rol="Marketing Director"
        />
        <CardTestimonial
          image={thomas}
          testimonial="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          name="Thomas S."
          rol="Chief Operating Officer"
        />
        <CardTestimonial
          image={jennie}
          testimonial="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          rol="Business Owner"
        />
      </div>
    </section>
  );
};

export default Testimonials;
