import data from "../../data/index.json";

export default function MyProject() {
  const handleLinkClick = (link) => {
    window.location.href = link;
  };

  return (
    <section className="portfolio--section" id="MyProjects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Projects</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={() => handleLinkClick("https://github.com/Bhavy21")}>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link" onClick={() => handleLinkClick(item.link)}>
                {item.link_n}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}