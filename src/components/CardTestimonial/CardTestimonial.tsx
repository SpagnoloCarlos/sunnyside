import "./CardTestimonial.css";

interface ICarTestimonial {
  image: string;
  testimonial: string;
  name: string;
  rol: string;
}

const CardTestimonial = ({
  image,
  testimonial,
  name,
  rol,
}: ICarTestimonial) => {
  return (
    <article className="card-testimonial">
      <img src={image} alt={name} width={64} height={64} />
      <p>{testimonial}</p>
      <div>
        <p>{name}</p>
        <span>{rol}</span>
      </div>
    </article>
  );
};

export default CardTestimonial;
