import "./Section.css";

const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className="section">{children}</section>;
};

export default Section;
