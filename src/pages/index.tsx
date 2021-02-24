import Layout from "../components/layout";

const Index = () => (
  <Layout home>
    <div className="fs-split">
      <div id="photo" className="split-image">
      </div>
      <div className="split-content">
        <div className="split-content-vertically-center">
          <div className="split-intro">
            <h1 className="headingTwo" id="name">
              <span id="whoami"></span>
              <a href="https://www.instagram.com/swiftyyoga/" target="_blank" style={{ borderBottom: "none"}}>
                <img width="18" style={{ marginLeft: "5px"}} src="/images/instagram.png"></img>
              </a>
              <a href="https://www.facebook.com/swiftyyoga" target="_blank" style={{ borderBottom: "none" }}>
                <img width="18" style={{marginLeft:"5px"}} src="/images/facebook.png"></img>
              </a>
            </h1>
            <span id="title" className="tagline headingOne"></span>
          </div>
          <div className="split-bio">
            <p id="bio"></p>
          </div>
          <div className="split-lists">
            <div className="split-list" id="columnOne"></div>
            <div className="split-list" id="columnTwo"></div>
            <div className="split-list" id="columnThree"></div>
          </div>
          <div className="split-bio footer">
            <a href="/">Home</a>
            <a href="/impressum.html">Impressum</a>
            <a href="/agb.html">AGB</a>
            <a href="/datenschutz.html">Datenschutz</a>
          </div>
        </div>
      </div>
    </div>
	  <script async src="/assets/script.js"></script>
  </Layout>
);

export default Index;