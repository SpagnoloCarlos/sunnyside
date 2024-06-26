import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import Section from "./components/Section/Section";
import Testimonials from "./components/Testimonials/Testimonials";
import headerLogo from "./assets/images/logos/logo.svg";
import arrow from "./assets/images/icons/icon-arrow-down.svg";
import transform from "./assets/images/pics/image-transform.jpg";
import standout from "./assets/images/pics/image-stand-out.jpg";

function App() {
  return (
    <>
      <main>
        <section className="hero">
          <header className="header">
            <img src={headerLogo} alt="Sunnyside" />
            <nav className="navigation">
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </nav>
            <Menu />
          </header>
          <h1 className="title">We are creatives</h1>
          <img className="hero-arrow" src={arrow} alt="Arrow" />
        </section>
        <Section>
          <article>
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#">Learn more</a>
          </article>
          <img src={transform} alt="Transform your brand" />
        </Section>
        <Section className="section-reverse">
          <img src={standout} alt="Stand out to the right audience" />
          <article>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <a href="#" className="learn-more-red">
              Learn more
            </a>
          </article>
        </Section>
        <Section className="section-reverse">
          <div className="card1">
            <h2>Graphic Design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
          <div className="card2">
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </Section>
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
