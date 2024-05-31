export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <div className="hero--section-description">
            <div className="experience">
              <h2>Experience/Expertise</h2>
              <p>I have extensive experience in web development, focusing on front-end technologies such as HTML, CSS, and JavaScript. Additionally, I am proficient in React.js and have worked on numerous projects involving responsive design, state management, and modern web development practices.</p>
            </div>
            <div className="education">
              <h2>Education</h2>
              <div className="education--item">
                <h3>Diploma</h3>
                <p>Completed a Diploma in Computer Engineering from Noble Group of Institutions.</p>
              </div>
              <div className="education--item">
                <h3>Current</h3>
                <p>Currently pursuing a Bachelor's degree in Computer Science and Engineering at Charusat University.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
