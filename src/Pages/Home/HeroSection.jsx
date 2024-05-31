export default function HeroSection() {

  const handleClick = () =>{
    window.open('./src/assets/Resume.pdf');
  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Bhavya Nathwani</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Frontend</span>
            <br />
            Developer
          </h1>
        </div>
        <button className="btn btn-primary" onClick={handleClick}>Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./src/assets/img/hero2.png" alt="Hero Section" />
      </div>
    </section>
  );
}
