import "./Section.css";

const Section = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <section className={`section ${className}`}>{children}</section>;
};

export default Section;
